const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req,res) => {
  res.send('Modifying the message as required!')
});

app.post('/counter', (req,res) => {
  counter =+ 1;
  res.send('')
});

app.get('/counter', (req,res) => {
  res.send(`${counter}`);
});

app.delete('/counter', (req,res) => {
  counter = 0;
  res.send('')
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);