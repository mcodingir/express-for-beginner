// add express library to the project
const express = require('express');
// create an express instance 
const app = express();

// set port number
const port = 3000;

// get request and request handler
app.get('*', function(req, res) { 
    res.end('Hello mCoding!');
});

// set web server
app.listen(port, function() {
    console.log('The serve is running. Please open your browser at http://localhost:', port)
});