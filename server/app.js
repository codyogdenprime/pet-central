'use strict';
// Setup Path
const filepath = require( 'path' );

// Get config
const config = require( filepath.resolve( './config' ) );

// Setup Express
const express = require( 'express' );
const app = express();

// Setup Port
const port = process.env.PORT || 3000;

// Setup Body Parser
const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );

// Open up some public files
app.use( express.static( filepath.resolve( './node_modules/normalize.css/') ) );
app.use( express.static( filepath.resolve( './node_modules/angular') ) );
app.use( express.static( filepath.resolve( './node_modules/angular-route') ) );
app.use( express.static( filepath.resolve( './public/') ) );

// Require and setup Mongoose
const mongoURI = config.db_url;
const mongoose = require('mongoose');
const MongoDB = mongoose.connect( mongoURI ).connection;

// If there is an error connecting, let us know
MongoDB.on( 'error', ( err ) => {
    console.log( 'mongodb connection error:', err);
});

// Open the connection and start the server listening!
MongoDB.once( 'open', () => {
    console.log( 'mongodb is open!' );
    app.listen( port, () => {
    	console.log( 'App is listening.' );
    } );
} );

// Require index.js routes to server index.html
const indexRoute = require( './routes/index' );
app.use( '/', indexRoute );

// Contains the API Routes
const pets = require( './routes/pets' );
app.use( '/pets', pets );