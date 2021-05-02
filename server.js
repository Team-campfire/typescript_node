const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const https = require('https');
var bodyParser = require('body-parser');

var multer = require('multer');
var upload = multer();

app.use(express.static(path.join(__dirname, './ajax/dist/ajax')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(upload.array());
app.use(express.static('public'));

// app.use(upload.array());
// app.use(express.static('public'));

// const express = require('express')
// const app = express()
// const fetch = require('node-fetch');

// var cors = require('cors')
// var mongoose = require('mongoose')
// const stream = require('stream')
// const port = 3000
// const path = require('path')
//
// const mongodb = require("mongodb").MongoClient;
// const Json2csvParser = require("json2csv").Parser;
// const fs = require("fs");
//
// // app.use(express.static(path.join(__dirname, './campfire/dist/campfire')));
// app.use(express.static(path.join(__dirname, './ajax/dist/ajax')));

app.get('/', (req, res) => {
	res.send('Hello world!')
	// console.log(req)
})
// Mongo Connection
// const { MongoClient } = require("mongodb");

// atlas connection string
// const url = "mongodb+srv://teamCampfire:vC1gdZfqcVN7IErS@campfire.x1fg6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/campfireApp";
// const client = new MongoClient(url);

// app.post('/post-feedback', function (req, res) {
//     db.collection('lab6data').insertOne(req.body);
//     res.send('Data received:\n' + JSON.stringify(req.body));
// });

// app.post('/post-feedback', function(req, res) {
//
// });

app.get('/random/:emailid', (req, res) => {
	console.log(req.body);
  if(req.params.emailid == "kokkam") {
      res.json({ msg: "authentication success" });
  } else {
    res.json({msg: "authentication failed"});
  }
});

app.get('/submitCategories', (req, res) => {
	console.log("egg\n");
	console.log(req.body);
  // if(req.params.emailid == "kokkam") {
  //     res.json({ msg: "authentication success" });
  // } else {
  //   res.json({msg: "authentication failed"});
  // }
});

app.get('/random2:num', (req, res) => {
	console.log(req.params.num);
	res.json({msg: "Hello World2"});
});

app.listen(port, () => {
  console.log('Listening on *:3000');
});
