console.log('Hola Mundo con cambios 1');

//npm init -y (inicar el proyecto)
//npm install express (instalar el framework)
//Creamos nuestro comando de dev (iniciar el proyecto)
//type: commonjs cambiado a module (para modificar el tipo de importacion)
//Se creo la carpeta src en donde creamos nuestro index.js

import app from "./App.js";
import "dotenv/config";

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})