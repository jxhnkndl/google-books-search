// Import mongoose and models
const db = require('../models');

// Define and export database methods
module.exports = {
  findAllBooks: async function (req, res) {
    try {
      const results = await db.Book.find({});
      res.json(results);
    } catch (err) {
      res.status(404).json({ success: false, error: err });
    }
  },
};