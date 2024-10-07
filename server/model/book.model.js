const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    require: true,
    trim: true,
  },
  author_name: {
    type: String,
    require: true,
    trim: true,
  },
  image: {
    type: String,
    require: true,
  },
  categorie: {
    type: String,
    require: true,
    trim: true,
  },
  book_description: {
    type: String,
    require: true,
    trim: true,
  },
  book_pdf_url: {
    type: String,
    require: true,
    trim: true,
  },
});

const book = new mongoose.model("bookSchema", bookSchema);
module.exports = book;
