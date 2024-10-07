const { bookService } = require("../services");

const addBook = async(req, res) => {
    // console.log(req.body);

    try{
        let image = req.file.path
        let reqBody = req.body
        
        if (image) {
          reqBody.image = req.file.filename;
        } else {
          throw new Error("Blog image is required!");
        }

        let book = await bookService.addBook(reqBody);

        if(!book){
            throw new Error('book not added')
        }

         res.status(201).json({
            message: "book added successfully",
            book
        })

    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// get book
const getBooks = async (req, res) => {
    try{
        let books = await bookService.getBooks()

        if(!books){
            throw new Error('books not found')
        }
        res.status(200).json({
            message: 'Books get sucessfilly', books
        })
    }catch(err){
        res.status(400).json({success: false,
        err: err.message})
    }
}

// delete book
const deleteBook = async( req, res ) =>{
    try{

        let {id} = req.params
        console.log(id);

        let bookExist = await bookService.findBookId(id)
        if(!bookExist){
            res.status(400).json({message: 'books not found'})
        }

        let book = await bookService.deleteBook(id)
        res.status(200).json({
            message: 'book delete success', book
        })

    }catch(err){
        res.status(400).json({success: false,
        err: err.message})
    }
}

// update book
const updateBook = async (req, res) => {
    try{
        const body = req.body;
        const {id} = req.params;

        if(!body || !id){
            throw new Error("Data not get");
        }

        const bookExist = await bookService.findBookId(id);
        if(!bookExist){
            throw new Error("book not found")
        }

        const book = await bookService.updateBook(body, id);

        if(!book){
            throw new Error('book not update')
        }
        res.status(201).json({
            message: "update successfullt",
            data: book
        })

    }catch(err){
        res.status(400).json({success: false,
        err: err.message})
    }
}

// find by categorie
// const findBookByCategorie = async (req, res) =>{
//     const body = {};
//     if(req.body?.categotie){
//         body = {categotie: req.body.categotie}
//     }

//     const categorie = await bookService.findBookByCategorie(body);

//     res.send(categorie)
// }

// const findBookByCategorie = async (req, res) => {
//     try{
//         const body = req.body
//         const categorie = req.body.categotie

//         if(!categorie){
//             throw new Error('categorie not get')
//         }



//         const resBody = await bookService.findBookByCategorie(categorie)
//         console.log(resBody);

//         if(!resBody){
//             throw new Error(' categorie not found')
//         }

//           res.status(200).json({
//             message:'data get scusses',
//             data : resBody
//         })
//     } catch (error) {
//         res.status(400).json({
//             message:'Error found',
//             error:error.message
//         })
// }
// }


module.exports = { addBook, getBooks, deleteBook, updateBook, 
    // findBookByCategorie
}