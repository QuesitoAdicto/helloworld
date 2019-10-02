const express= require('express');
const app = express();
const pokedex= require('./pokedex.json');
var datos = [];
var Persona = {};
app.get("/", (req, res) =>{
    console.log(req);
    res.send("Hola mundo!");
});
  app.get("/pokedex/id/:id", (req, res) =>{
    var dato = req.params.id;
	  res.send(pokedex.pokemon[dato-1]);
  });
  app.get("/pokedex/name/:name", (req, res) =>{
    const filterCombiner = (d, filterArray) => {
  for (let fn of filterArray) {
    if (!fn(d)) {
      return false;
    }
  }
  return true;
}

const filterArray1 = [
  d => d.name === req.params.id,};
  });
  app.get("/pokedex/random", (req, res) =>{
    var dato = Math.floor(Math.random() * 151);
	  res.send(pokedex.pokemon[dato]);
    });
  app.get("/pokedex/image/:id", (req, res) =>{
    var dato = req.params.id;
    const img=pokedex.pokemon[dato-1].img;
     res.send("<img src='"+img+"'/>");
    });
app.listen(3000, () =>{
    console.log("Server is running...");
});
