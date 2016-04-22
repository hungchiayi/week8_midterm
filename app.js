var express        = require('express');
var path           = require( 'path' );
var http           = require( 'http' );
var cookieParser   = require( 'cookie-parser' );
var engine         = require( 'ejs-locals' );
var methodOverride = require( 'method-override' );
var favicon        = require( 'serve-favicon' );
var static         = require( 'serve-static' );
var logger         = require( 'morgan' );
var errorHandler   = require( 'errorhandler' );
var bodyParser     = require('body-parser');
var routers        = require('./routers');
var app            = express();
var port           = process.env.PORT || 3000;


app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, 'public/views' ));
app.set('view engine', 'ejs');
app.use( logger( 'dev' ));
app.use( methodOverride());
app.use( cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routers);

app.listen(port);
