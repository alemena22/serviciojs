import { Router } from "express";
//instancia del router
const tareasRouter = Router();

//vamos a devolver jsons
//recibir datos por parametros de la url
//recibir datos por el body
const tareas = [
    {id: 1, nombre: "Tarea 1", completada: false}
]

tareasRouter.get("/", (req, res) =>{
    res.status(200).json(tareas)
})

tareasRouter.patch("/:id", (req, res)=>{
    const id = req.params.id //params es para sacar los datos de la ruta/url
    const {nombre, completada} = req.body //body para sacar los datos del cuerpo de la peticion
    
    if(!nombre || nombre.trim() === ""){
        res.status(400).json({error: "El nombre es requerido"})
        return
    }

    if(completada === undefined || completada === null){
        res.status(400).json({error: "La completada es requerido"})
        return
    }

    if(id === undefined || id === null){
        res.status(400).json({error: "El id es requerido"})
        return
    }

    //Logica de negocio del servicio
    const tarea = tareas.find(tarea => tarea.id === parseInt(id))
    if(!tarea){
        res.status(400).json({error: "Tarea no encontrada"})
        return
    }

    //Actualizar tarea si existe
    tarea.nombre = nombre
    tarea.completada = completada

    res.status(200).json(tarea)
})

export default tareasRouter;