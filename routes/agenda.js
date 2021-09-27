//Rutas para crear servicios
const express =  require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');
const { check } = require('express-validator');

//Agenda una hora
// api/agenda es el endpoint

router.post('/', 
    agendaController.agendarHora
);

router.get('/',
    agendaController.obtenerAgendas
)

module.exports = router;