// Import dependencies
import axios from 'axios';

// Create and export axios request methods
export default {
  search: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
  },
  getBooks: function() {
    return axios.get("/api/books");
  }
}