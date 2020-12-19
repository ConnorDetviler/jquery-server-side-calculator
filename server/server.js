const express = require('express');
const bodyParser = require('body-parser');
const { appendFileSync } = require('fs');


const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));


app.post('/calc', (req, res) => {
    console.log('in post')
    let userInput = req.body;
    console.log(userInput)
    res.sendStatus(201);
  })

  app.get('/calc', (req, res) => {
    // res.send(newData);
    console.log('you got to /calc')
    res.sendStatus(201);
  })



app.listen(PORT, () => {
    console.log('Server running on PORT', PORT)
});