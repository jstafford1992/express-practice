'use strict';

const express = require('express');
const knex = require('knex');

const port = process.env.PORT || 3000;

//start App
const app = express();


//Routes
const home = require('./routes/home.js');
const about = require('./routes/about.js');
const contact = require('./routes/contact.js');


app.set('view engine', 'ejs');

app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);


//Listen
app.listen(port, function(){
  console.log("Listening on ", port);
});

//export
module.export = app;
