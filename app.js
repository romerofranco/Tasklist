const express = require ('express');
const app = express();
const dbconnect = require('./config/db.js'); // Importar la conexión a la base de datos
const taskRoutes = require('./routes/tasks.js'); //Importamos las rutas de tareas 

//Middleware para interpretar JSON 
app.use(express.json());

// Ruta de prueba 
app.get('/', (req, res) => {
    res.send('El servidor esta funcionando correctamente ');
});


// Probar la conexión a la base de datos y arrancar el servidor
dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo iniciar el servidor debido a un error en la base de datos');
});


