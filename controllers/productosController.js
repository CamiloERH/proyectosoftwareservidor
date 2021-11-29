const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) => {
    try {
        const { nombre, imagen, descripcion, valor } = req.body;

        let producto = new Producto(req.body);

        await producto.save();
        return res.status(201).json({msg: 'Producto creado con exito'});
        
    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}


exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.json({productos});
    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}