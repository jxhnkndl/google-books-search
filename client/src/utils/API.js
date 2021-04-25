// Import dependencies
import axios from 'axios';

// Create and export axios request methods
export default {
  // Search for book using Google Books API
  search: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
  },
  // Return all saved books from database
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Add selected book to database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Delete selected book from database
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
}