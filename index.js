const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
const moves = require('./routes/moves');
const notFoundHandler = require('./middleware/notFoundHandler');
const corsHandler = require('./middleware/corsHandler')
const app = express();

app.use(corsHandler);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/pokemon", pokemon);
app.use("/user", user);
app.use("/moves", moves);
app.use(notFoundHandler);

app.listen(3000, () => {
    console.log("Server is running...");
});

//const db = require('./config/database');
// app.get("/test", (req, res) => {
//     db.query("SELECT * FROM pokemon").then((rows)=>{
//         res.status(200);
//         res.send(rows);
//     }).catch((err) => {
//         res.status(500);
//         res.send('Algo salió mal');
//         console.log(err);
//     });
// });
