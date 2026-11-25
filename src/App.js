//Configuracion de nuestro servidor
import express from "express";
import cors from "cors"; //Para que nuestro servidor pueda recibir peticiones.

//Crear una instancia de express
const app = express();
//Configuraciond e cors automatica
app.use(cors());
//Para que el servidor pueda entender el formato JSON
app.use(express.json());
//Configuracion de ruta para comprobar que esta funcionando
app.get("/", (req, res) => {
    res.send("Hola Mundo, desde mi servidor de express")
});
//Exportar para poder usarlo en el index.js
export default app;