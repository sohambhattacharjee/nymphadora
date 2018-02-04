require('babel-register')
const serverSideRendering = require('./server/app').default
const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.resolve('dist')))

app.use('/todo', serverSideRendering)

app.listen(3000)
console.log('app listening on port 3000')