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