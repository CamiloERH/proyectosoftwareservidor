//Rutas para autenticar usuarios
const express =  require('express');
const router = express.Router(); 
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

//Iniciar sesión 
// api/auth es el endpoint

router.post('/', 
    [
        check('email', 'Agrega un email válido').isEmail()
    ],
    authController.autenticarCliente
);

router.get('/', 
    auth,
    authController.clienteAutenticado
);

module.exports = router;