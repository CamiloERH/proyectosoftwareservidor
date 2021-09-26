const mongoose = require('mongoose');

const AgendaSchema = mongoose.Schema({
    idHora: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hora'
    },
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    }
});

module.exports = mongoose.model('Agenda', ServicioSchema);