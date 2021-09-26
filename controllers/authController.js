const Cliente = require('../models/Cliente');

const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
require('dotenv').config({path: 'variables.env'});
const jwt = require('jsonwebtoken');

exports.autenticarCliente = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({errors: errors.array()})
    }

    // extraer el email y password
    const { email, password } = req.body;
    
    try {
        let cliente = await Cliente.findOne({email});
        if(!cliente){
            return res.status(400).json({msg: 'El usuario no existe'});
        }

        //Revisar el password
        const passCorrecto = await bcryptjs.compare(password, cliente.password);
        if(!passCorrecto){
            return res.status(400).json({msg: 'Password incorrecto'});
        } 

        const payload = {
            cliente: {
                id: cliente.id
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

//Obtiene que cliente esta autenticado
exports.clienteAutenticado = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.cliente.id).select('-password');
        res.json({cliente});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}