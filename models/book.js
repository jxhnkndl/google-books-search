// Import dependencies
const mongoose = require("mongoose");

// Extract schema constructor from mongoose
const Schema = mongoose.Schema;

// Create Book document schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: { type: String },
  image: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now }
});

// Compile Book model from book schema
const Book = mongoose.model("Book", bookSchema);

// Export Book model
module.exports = Book;