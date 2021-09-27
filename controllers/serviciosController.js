const Servicio = require('../models/Servicio');

exports.crearServicio = async (req, res) => {
    try {

        const { nombre, descripcion, valor } = req.body;

        servicio = new Servicio(req.body);

        await servicio.save();
        return res.status(201).json({msg: 'Servicio creado con exito'});
        
    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}

exports.obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find({});
        res.json({servicios});
    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}

