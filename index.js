const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//Crear el servidor
const app = express();

//Conectar a la base de datos
connectDB();

//habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json({extended: true}));

const PORT = process.env.PORT || 4000; //puerto de la app

app.use('/api/horas', require('./routes/horas'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/horas', require('./routes/horas'));
app.use('/api/agenda', require('./routes/agenda'));

app.listen(PORT, '0.0.0.0',  () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

