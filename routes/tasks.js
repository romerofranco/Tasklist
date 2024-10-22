const express = require('express');
const router = express.Router();
const ModelTask = require ('../models/taskmodel'); //Importar el modelo de la Lista de tareas 


// Actualizamos el estado de una tarea especifica para marcarla como completada 
router.put('/tareas/:id/completar', async (req, res) => {
    const {id} = req.params;
    try{
        const tareaActualizada = await Tarea.findByIdAndUpdate(
            id,
            {completado: true}, //cambia el estado de la tarea a completado 
            {new: true}
        );
        if(!tareaActualizada) {
            return res.status(404).json ({ error: 'Tarea no encontrada'});
            }
            res.status(200).json(tareaActualizada);
        }catch (error) {
            res.status(500).json({ error: 'Error completando la tarea'});
        }
    });

    module.exports = router;