const express = require('express');
const server = express.Router();


server.get('/', function(req, res){
    res.send("Hello world");
});

server.get('/name', function(req, res){
    res.send("Liam Humble");
});

server.get('/greeting', function(req, res){
    res.send("Liam Humble \n N0166338");
});

server.get('/add', function(req, res){
    let x = parseFloat(req.query.x);
    let y = parseFloat(req.query.y);

    res.send(`The sum of x ${x} and y ${y} is ${x+y}`)

});

server.get('/calculate', function(req, res){
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    let operation = req.query.operation;

    let rVal =0 ;

    if(operation === '+'){
        rVal = a + b;
    } else if (operation === '-'){
        rVal = a -b;
    } else if (operation === '*'){
        rVal = a * b;
    } else if (operation === '/'){
        rVal = a / b;
    } else if (operation === '**'){
        rVal = a ** b;
    }
    console.log(operation);
    res.send(`Calculated value : ${rVal}  `);
});

module.exports = server;
