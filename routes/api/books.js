// Import Express router and books controller
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Routes that match "/api/books" endpoint
router.route("/")
  .get(booksController.getBooks)
  .post(booksController.addBook)
  .delete(booksController.deleteBook);

// Export API router
module.exports = router;