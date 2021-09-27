const Agenda = require('../models/Agenda');
const Hora = require('../models/Hora')

exports.agendarHora = async (req, res) => {
    try {
        const { idHora, idCliente } = req.body;
        await Hora.findByIdAndUpdate(idHora, {disponible: false});
        const agenda = new Agenda(req.body);

        await agenda.save();
        res.status(201).json({agenda});

    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}

//Horas agendadas
exports.obtenerAgendas = async (req, res) => {
    try {
        const agendas = await Agenda.find({})
        .populate('idCliente', {nombre: 1, apellido: 1})
        .populate({
            path: 'idHora',
            select: 'fecha',
            populate: { 
                path: 'idServicio',
                select: 'nombre -_id'
            }
        });
    

        res.json({agendas});
    } catch(error){
        res.status(400).send('Hubo un error');
        console.log(error);
    }
}