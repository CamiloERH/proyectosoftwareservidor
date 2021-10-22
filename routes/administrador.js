//Rutas para autenticar usuarios
const express =  require('express');
const router = express.Router(); 
const { check } = require('express-validator');
const authAdminController = require('../controllers/authAdminController');
const authAdmin = require('../middleware/authAdmin');

//Iniciar sesión 
// api/admin es el endpoint

router.post('/', 
    [
        check('email', 'Agrega un email válido').isEmail()
    ],
    authAdminController.autenticarAdministrador
);

router.get('/', 
    authAdmin,
    authAdminController.administradorAutenticado
);

module.exports = router;