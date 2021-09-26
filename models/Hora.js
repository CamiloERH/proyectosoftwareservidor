const mongoose = require('mongoose');

const HoraSchema = mongoose.Schema({
    idServicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },
    idAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Administrador', 
        required: true
    },
    disponible: {
        type: Boolean,
        default: true,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Hora', HoraSchema);
