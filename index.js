const express= require('express');
const bodyparser= require('body-parser');
const app = express();
const pokedex= require('./pokedex.json');
var datos = [];
var Persona = {};
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.get("/", (req, res) =>{
    console.log(req);
    res.send("Bienvenido al pokedex");
});
app.get("/pokedex", (req, res) =>{
    res.send(pokedex.pokemon);
});
app.get("/pokemon", (req, res) =>{
    res.json(req.body.x);
});

app.post("/pokemon", (req, res) =>{
    res.json({message:"Post a /pokemon"});
});
  app.get("/pokedex/id/:id([0-9]{1,3})", (req, res) =>{
    res.send(200);
    var dato = req.params.id;
	  res.send(pokedex.pokemon[dato-1]);
  });
  app.get("/pokedex/name/:name([A-Za-z]+)", (req, res) =>{
  });
  app.get("/pokedex/\\brandom\\b", (req, res) =>{
    var dato = Math.floor(Math.random() * 151);
	  res.send(pokedex.pokemon[dato]);
    });
  app.get("/pokedex/image/:id([0-9]{1.3})", (req, res) =>{
    var dato = req.params.id;
    const img=pokedex.pokemon[dato-1].img;
     res.send("<img src='"+img+"'/>");
    });
    app.use((req, res) =>{
        res.status(404);
        res.json({"404": "No existe la pagina"})
    });
app.listen(3000, () =>{
    console.log("Server is running...");
});
