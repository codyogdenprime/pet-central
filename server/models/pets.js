// Require Mongoose
const mongoose = require( 'mongoose' );

// Setup new schema
const Schema = mongoose.Schema;

// Setup assignment schema
var pet = new Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	species: { type: String, required: true },
	image_url: { type: String, required: true }
});

// Create a mongo model
var Pet = mongoose.model( 'pets', pet );

// Send that back
module.exports = Pet;