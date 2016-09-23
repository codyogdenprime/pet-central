'use strict';
// Setup Path
const filepath = require( 'path' );

// Setup Express
const express = require( 'express' );
const app = express();

// Setup Port
const port = process.env.PORT || 3000;

// Setup Body Parser
const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );

// Open up some public files
app.use( express.static( filepath.resolve( '../node_modules/normalize.css/') ) );
app.use( express.static( filepath.resolve( './node_modules/angular') ) );
app.use( express.static( filepath.resolve( './public/') ) );

// Listen up!
app.listen( port, () => {
	console.log( 'App is listening on:', port );
} );

const indexRoute = require( './routes/index' );
app.use( '/', indexRoute );