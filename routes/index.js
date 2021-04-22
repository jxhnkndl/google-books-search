// Import dependencies
const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

// Install summed API routes
router.use("/api", apiRoutes);

// If request is not to a specific API endpoint, serve the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export complete application routier
module.exports = router;