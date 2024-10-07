const { bookSchema } = require("../model")

// add book
const addBook = (reqBody) => {
    return bookSchema.create(reqBody)
}

// get book
const getBooks = () => {
    return bookSchema.find()
}

// find book for delete
const findBookId = (id) => {
    return bookSchema.findById(id)
}

// delete book
const deleteBook = (id) => {
    return bookSchema.findByIdAndDelete(id)
}

// update book
const updateBook = (body, id) => {
    return bookSchema.findByIdAndUpdate(id, {$set : body})
}

// find book by categorie
// const findBookByCategorie = (categorie) =>{
//     return bookSchema.find({categotie:{$in:categorie} }).toArray()
// }

module.exports = {addBook, getBooks, findBookId, deleteBook, updateBook,
    //  findBookByCategorie
    }