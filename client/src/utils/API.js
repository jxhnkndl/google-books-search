// Import dependencies
import axios from 'axios';

// Create and export axios request methods
export default {
  getBooks: function() {
    return axios.get("/api/books");
  }
}