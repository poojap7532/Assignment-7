require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbConnect = require('./db/dbConnect')
const routes = require('./routes')
const cookieParser = require('cookie-parser')

const app = express()

// app.use(cors())

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

// database connect
dbConnect()

// route use
app.use('/v1', routes)

// create server
http.createServer(app).listen(process.env.PORT, () => {console.log('server started');})