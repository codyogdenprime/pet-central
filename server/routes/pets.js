const filepath = require( 'path' );
const express = require( 'express' );
const pets = express.Router();

pets.route( '/' )
.get( ( req, res ) => {

	console.log( ' /pets', req.body );

} )
.post( ( req, res ) => {

	console.log( ' /pets', req.body );

} )
.put( ( req, res ) => {

	console.log( ' /pets', req.body );

} )
.delete( ( req, res ) => {

	console.log( ' /pets', req.body );

} );

module.exports = pets;