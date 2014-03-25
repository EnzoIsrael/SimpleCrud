
var express  = require('express')
  , app      = express()	
  , server   = require('http').createServer(app)
  , cons     = require('consolidate')
  , mongoose = require('mongoose')
  , swig     = require('swig')
  , fs       = require('fs')
  , https    = require('https')
  , path     = require('path');

 //Cargar configuracion del server
 var config = require('./config.js')(app, express, mongoose, cons, swig, path); 

 //cargar modelos de Mongoose
 var models = {};
 models.Post = require('./models/Post')(mongoose,models).model; 

 //rutas
 app.locals({
 	routes:{
 		index : '/'
 	}
 });

 //cargar controladores
 var Post = require('./controllers/Post')(models,app);

 app.get(app.locals.routes.index, function(req,res){
    res.render('index',{ title: 'Simple CRUD' });
 })

 var port = 6969;
 app.listen(port, function() {
	console.log("Listening on " + port);
 });





   