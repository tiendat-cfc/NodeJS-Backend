// const http = require('node:http')
// const hostname = '127.0.0.1' //localhost
// const port = 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

//Sử dụng ExpressJS
const express = require('express')  //commonjs
const path = require('path') //commonjs - có sẵn trong nodejs
require('dotenv').config()
//import express from 'express';  //es modules

const app = express(); //app cua express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//Cấu hình static file với ExpressJS
app.use(express.static(path.join(__dirname, 'public')))

//Khai bao Route
app.get('/', (req, res) => {
  res.send('Hello Dat!, Welcome to my website')
})

//Tạo view động
app.get('/dat', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})