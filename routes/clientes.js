//Rutas para crear clientes
const express =  require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { check } = require('express-validator');

//Crea un usuario 
// api/clientes es el endpoint

router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({min:6})
    ],
    clienteController.crearCliente
);

module.exports = router;