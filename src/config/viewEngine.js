const path = require('path') //commonjs - có sẵn trong nodejs
const express = require('express')

const configViewEngine = (app) => {
  app.set('views', path.join('./src', 'views'))
  app.set('view engine', 'ejs')

  //Cấu hình static file với ExpressJS
  app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine
