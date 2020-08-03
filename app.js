const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')
// var http = require("http");
const _ = require('lodash')

var cors = require('cors')
var app = express()

app.use(cors())
// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 2 * 1024 * 1024 * 1024, //2MB max file(s) size
    },
  })
)

//add other middleware
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

//start app
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App is listening on port ${port}.`))
