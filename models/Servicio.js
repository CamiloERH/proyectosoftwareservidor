const mongoose = require('mongoose');

const ServicioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Servicio', ServicioSchema);