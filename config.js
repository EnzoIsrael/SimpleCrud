module.exports = function(app, express, mongoose, cons, swig, path){

    var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  	}

  	app.use(allowCrossDomain);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.logger('dev'));
	app.use(express.bodyParser({limit: '3mb'}));	   //?
	app.use(express.methodOverride()); //?

	//Congigurando nuestro engine Swig
	app.engine('.html', cons.swig);
  	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

	//configurando MongoDB
	var bd = 'mongodb://localhost/simpleBlog';
    //conectando a MongoDB
	 mongoose.connect(bd, function (err, res) {
        if(err)  
          console.log('ERROR connecting to: ' + bd + '. ' + err);
        else 
          console.log ('Succeeded connected to: ' + bd);     
    });
	
};