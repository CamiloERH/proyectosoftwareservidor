const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
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

module.exports = mongoose.model('Producto', ProductoSchema);