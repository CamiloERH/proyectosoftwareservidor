//Rutas para servicios
const express =  require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');
const { check } = require('express-validator');

// servicios
// api/servicios es el endpoint

router.post('/', 
    serviciosController.crearServicio
);

router.get('/', 
    serviciosController.obtenerServicios
);

module.exports = router;