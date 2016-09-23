const filepath = require( 'path' );
const express = require( 'express' );
const index = express.Router();

index.route( '/' )
.get( ( req, res ) => {

	console.log( 'GET /', req.body );

	res.sendFile( filepath.resolve( './public/views/index.html' ) );

} );

module.exports = index;