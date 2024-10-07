let jwt = require('jsonwebtoken')
let secret = "book_store"

let createToken = (data) => {
    return jwt.sign({data}, secret)
}

let authenticate = (req, res, next) => {
    let token = req.cookies['token']
    console.log(token, 'token');

    if(!token){
        res.status(400).json({
            message: "you are not login"
        })
    }

    let admin = jwt.verify(token, secret)
    // let user = jwt.verify(token, secret)

    req.admin = admin
    // req.user = user
    next()
}

module.exports = {createToken, authenticate}