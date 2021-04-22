// Import Express router and books controller
const router = require("express").Router();
const booksController = require("../../controllers");

// Routes that match "/api/books" endpoint
router.route("/")
  .get(booksController.findAllBooks);

// Export API router
module.exports = router;