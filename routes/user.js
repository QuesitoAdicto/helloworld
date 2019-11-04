const db = require('../config/database');
const express = require('express');
const user = express.Router();
user.post("/",(req, res)=>{
    const name = req.body.name;
    const mail = req.body.mail;
    const pass = req.body.pass;
    
    const query=`Insert INTO user (user_mail,user_password, user_name) VALUES ('${mail}','${pass}','${name}');`;
    db.query(query).then(rows => {
        res.status(201);
        res.json({code: 0});
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió un error");
    });
    
});

user.post("/login",(req, res)=>{
    const mail = req.body.mail;
    const pass = req.body.pass;
    query="SELECT * from user WHERE ";
    query +=`user_mail='${mail}' and user_password='${pass}';`;
    db.query(query).then(rows => {
        res.status(200);
        if(rows.length==1){
            res.json({code: 0 ,message:"Bienvenido"});
        }
        else{
            res.json({code: 1 ,message:query});
        }
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió un error");
    });
});
module.exports=user;