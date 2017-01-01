'use strict';

const express = require('express');

const port = process.env.PORT || 3000;

//start App
const app = express();


//Routes
const home = require('./routes/home.js');

app.set('view engine', 'ejs');

app.use('/', home);



//Listen
app.listen(port, function(){
  console.log("Listening on ", port);
});

//export
module.export = app;
