const Cliente = require('../models/Cliente');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
require('dotenv').config({path: 'variables.env'});
const jwt = require('jsonwebtoken');

exports.crearCliente = async (req, res) => {
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({errors: errors.array()})
    }
    //extraer email y password
    const { nombre, apellido, email, password } = req.body;
    console.log(nombre);

    try {
        //Revisar que el usario registrado sea unico
        let cliente = await Cliente.findOne({ email });
        
        if(cliente){
            return res.status(400).json({ msg: 'El usuario ya existe'});
        }
        //crea el nuevo usuario
        cliente = new Cliente(req.body);
        //Hashear el password
        const salt = await bcryptjs.genSalt(10);
        cliente.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await cliente.save();

        //Crear y firmar el JWT
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

        res.status(200).send('Usuario creado');
       
    } catch (error) {
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}
