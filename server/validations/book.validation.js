const Joi = require('joi')

const book = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
    author_name: Joi.string().required().trim(),
    // imageURL:Joi.string().required().trim(),
    image:Joi.required(),
    categorie: Joi.string().required().trim(),
    book_description: Joi.string().required().trim(),
    book_pdf_url: Joi.string().required().trim(),
  }),
};

module.exports = {book}