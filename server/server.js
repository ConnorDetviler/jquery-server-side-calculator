const express = require('express');
const bodyParser = require('body-parser');
const { appendFileSync } = require('fs');
const { doesNotMatch } = require('assert');


const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));


app.post('/calc', (req, res) => {
    console.log('in post')
    let userInput = req.body;
    console.log(userInput)
    doMath(userInput);
    res.sendStatus(201);
});

app.get('/calc', (req, res) => {
    res.send(results);
    console.log('you got to /calc')
    // res.sendStatus(201);
});

let historyArray = [];
let results = {};

function doMath(userInput) {
    let historyLog = '';
    let num1 = Number(userInput.inputOne);
    let num2 = Number(userInput.inputTwo);
    let operator = userInput.operator;

    switch (operator) {
        case 'add':
            results.equals = num1 + num2;
            historyLog = `${num1} + ${num2} = ${results.equals}`;
            break;

        case 'subtract':
            results.equals = num1 - num2;
            historyLog = `${num1} - ${num2} = ${results.equals}`;
            break;

        case 'multiply':
            results.equals = num1 * num2;
            historyLog = `${num1} &#215 ${num2} = ${results.equals}`
            break;

        case 'divide':
            results.equals = num1 / num2;
            historyLog = `${num1} ÷ ${num2} = ${results.equals}`
            break;
    }

    historyArray.unshift(historyLog);
    results.historyArray = historyArray;

    console.log(results);
}

app.listen(PORT, () => {
    console.log('Server running on PORT', PORT)
});