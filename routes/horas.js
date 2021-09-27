//Rutas para crear servicios
const express =  require('express');
const router = express.Router();
const horasController = require('../controllers/horasController');
const { check } = require('express-validator');

//Crea una hora
// api/horas es el endpoint
router.post('/', 
    horasController.crearHora
);

router.get('/:id', 
    horasController.obtenerHoras
);

module.exports = router;