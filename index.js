'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

let app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
  console.log(`Server pid is: ${process.pid}`)
})

app.use('/api', require('./routes'))
