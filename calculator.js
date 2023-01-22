const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    // console.log(req.body);
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    res.send(`<h1>The Sum of the Numbers is: ${num1 + num2}</h1>`);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = Math.ceil(weight / (height * height)); //BMI weight in kilograms divided by height in meters squared
    res.send(`<h1>The BMI of the Client with Weight : ${weight} and Height : ${height} is: ${bmi}.</h1>`);
});

app.listen(3000, function(){
    console.log("Server Started on port 3000...");
});