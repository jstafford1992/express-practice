'use strict';

const express = require('express');

const port = process.env.PORT || 3000;

//start App
const app = express();







//Listen
app.listen(port, function(){
  console.log("Listening on ", port);
});

//export
module.export = app;
