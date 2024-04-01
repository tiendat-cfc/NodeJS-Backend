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
require('dotenv').config() //dotenv: dùng để quản lý các biến môi trường
//import express from 'express';  //es modules
const express = require('express')  //commonjs

const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web') //mapping tới biến xuất ra từ file bên kia =)))

const app = express(); //app cua express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo Route
app.use('/', webRouter) //đường route mặc định
// app.use('/test', webRouter) //route này hiểu '/test' như 1 tiền tố
// VD: 'http://localhost:8082/test/dat' thì kết quả cũng giống 'http://localhost:8082/dat'

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})