const mongoose = require('mongoose');

const AgendaSchema = mongoose.Schema({
    idHora: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hora',
        required: true
    },
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
});

module.exports = mongoose.model('Agenda', AgendaSchema);