const express = require('express');
const app = express();
const pg = require('pg')
require("dotenv").config();

const port = process.env.PORT || 3001;
const db = require("./db/db");

app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});
app.use(express.static('./client/build'))

app.get('/api/test', (req, res) => {
  res.send('hello')
});



app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});