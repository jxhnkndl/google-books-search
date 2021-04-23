// Import mongoose and models
const db = require('../models');

// Define and export database methods
module.exports = {
  getBooks: async function (req, res) {
    try {
      const results = await db.Book.find({});
      res.json(results);
    } catch (err) {
      res.status(422).json({ success: false, msg: err });
    }
  },
  addBook: async function (req, res) {
    try {
      const results = await db.Book.create(req.body);
      res.json(results);
    } catch (err) {
      res.status(422).json({ success: false, msg: err });
    }
  },
};
