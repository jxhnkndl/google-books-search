// Import Express router and books collection routes
const router = require("express").Router();
const bookRoutes = require("./books");

// Install API book routes
router.use("/books", bookRoutes);

// Export summed API router
module.exports = router;