const express = require('express')
const { bookController } = require('../controller')
const { upload } = require('../middlewares/multer')
const validate = require('../middlewares/validate')
const { bookValidation } = require('../validations')

const route = express.Router()

route.use('/add',upload.single('image'),
//  validate(bookValidation.book),
 bookController.addBook )
route.get('/get', bookController.getBooks)
route.delete('/delete/:id', bookController.deleteBook)
route.put('/update/:id',validate(bookValidation.book), bookController.updateBook)
// route.get('/getCategorie/:categorie', bookController.findBookByCategorie)

module.exports = route