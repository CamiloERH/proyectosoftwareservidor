//Rutas para productos
const express =  require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const { check } = require('express-validator');

// servicios
// api/productos es el endpoint

router.post('/', 
    productosController.crearProducto
);

router.get('/', 
    productosController.obtenerProductos
);

module.exports = router;