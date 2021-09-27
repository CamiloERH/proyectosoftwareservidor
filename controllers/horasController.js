const Hora = require('../models/Hora');

exports.crearHora = async (req, res) => {
    try {

        const { idServicio, idAdmin, fecha } = req.body;
        console.log( idServicio, idAdmin, fecha );

        hora = new Hora(req.body);

        await hora.save();
        res.status(201).json({hora});

    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}

exports.obtenerHoras = async (req, res) => {

    const idServicio = req.params.id;

    try {
        const horas = await Hora.find({idServicio, disponible: true});
        res.json({horas});
    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}