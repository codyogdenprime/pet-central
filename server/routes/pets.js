// Add path module
const filepath = require( 'path' );

// Require Config Module
const config = require( filepath.resolve( './config' ) );

// Setup Express Router
const express = require( 'express' );
const pets = express.Router();

// Setup MongDB
const mongoURI = config.db_url;
const mongoose = require('mongoose');

// Require Pets Model
const Pet = require( '../models/pets' );

pets.route( '/' )
.get( ( req, res ) => {
	console.log( ' /pets', req.body );

	Pet.find( ( err, result ) => {
		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );
	});
} )
.post( ( req, res ) => {
	console.log( ' /pets', req.body );

	var newPet = new Pet({
		name: req.body.name,
		age: req.body.age,
		species: req.body.species,
		image_url: req.body.image_url
	});

	newPet.save( ( err, result ) => {
		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );
	});
} )
.delete( ( req, res ) => {
	console.log( 'DELETE /pets', req.body );

	Pet.remove( req.body, ( err, result ) => {
		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );
	});

} );

module.exports = pets;