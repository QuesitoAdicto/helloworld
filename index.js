const express= require('express');
const app = express();
var datos = [];
var Persona = {};
app.get("/", (req, res) =>{
    console.log(req);
    res.send("Hola mundo!");
});
app.get("/:id/:Nombre/:Edad", (req, res) =>{
  if(req.url!="/favicon.ico"){
  var dato = req.params.id;
  var dato1 = req.params.Nombre;
  var dato2 = req.params.Edad;
    console.log(dato);
    console.log(dato1);
    console.log(dato2);
    datos.push(dato);
    Persona.Nombre=dato1;
    Persona.Edad=dato2;
    res.send();
    console.log(datos);
    console.log(Persona);
  }
});
app.listen(3000, () =>{
    console.log("Server is running...");
});
