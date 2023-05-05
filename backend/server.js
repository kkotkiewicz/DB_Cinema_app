const express = require("express");
const bodyParser = require('body-parser'); 
const cors = require('cors');
const port = 4000;

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/movies/:id", (req, res) => {
    res.send({ movie: req.params.id, seances: ["asadsadwdawd", "sadfwefwef", "asdwqdwfdwe"]})
})

app.get("/seances/:id", (req, res) => {
    res.send({ seats: [{id: 0, taken:true}, {id: 1, taken:false}, {id: 2, taken:false}, {id: 3, taken:false}, {id: 4, taken:false}, {id: 5, taken:true}]})
})

app.listen(port, function () {
    console.log("Backend API listening on port " + port)
})