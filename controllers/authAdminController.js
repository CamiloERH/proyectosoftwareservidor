const Administrador = require('../models/Administrador');

const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
require('dotenv').config({path: 'variables.env'});
const jwt = require('jsonwebtoken');

exports.autenticarAdministrador = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({errors: errors.array()})
    }

    // extraer el email y password
    const { email, password } = req.body;
    
    try {
        let administrador = await Administrador.findOne({email});
        if(!administrador){
            return res.status(400).json({msg: 'El usuario administrador no existe'});
        }

        //Revisar el password
        const passCorrecto = await bcryptjs.compare(password, administrador.password);
        if(!passCorrecto){
            return res.status(400).json({msg: 'Password incorrecto'});
        } 

        const payload = {
            administrador: {
                id: administrador.id
            }
        };

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;
            res.json({ token });
        });

    } catch(error) {
        console.log(error);
    }

}

//Obtiene que el administrador esta autenticado
exports.administradorAutenticado = async (req, res) => {
    try {
        const administrador = await Administrador.findById(req.administrador.id).select('-password');
        res.json({administrador});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}