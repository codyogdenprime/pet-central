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

	// Send all pets as json
	Pet.find( ( err, result ) => {
		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );
	});
} )
.post( ( req, res ) => {
	console.log( ' /pets', req.body );

	// Create a new pet object
	var newPet = new Pet({
		name: req.body.name,
		age: req.body.age,
		species: req.body.species,
		image_url: req.body.image_url
	});

	// Save it to the database
	newPet.save( ( err, result ) => {
		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );
	});
} )
.patch( ( req, res ) => {
	console.log( 'DELETE /pets', req.body );

	// Delete a pet. Only the id is sent, so just put the whole body in there. YOLO
	Pet.find( req.body ).remove( ( err, result ) => {
		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );
	});
} );

module.exports = pets;