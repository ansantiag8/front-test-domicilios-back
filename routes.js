'use strict'

let express = require('express')
let router = express.Router()

router.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, token')
  res.setHeader('Access-Control-Expose-Headers', 'token')
  next()
})

router.options('*', (req, res) => {
  res.status(200).end()
})

router.use('/publications', require('./modules/publications/routers'))

router.all('*', (req, res) => {
  res.status(404).end()
  console.error(`Url ${req.originalUrl} for method ${req.method} don't exist`)
})


module.exports = router
