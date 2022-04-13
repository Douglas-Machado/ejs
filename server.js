const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  const quality = [
    {
      title: 'E',
      message: 'mbedded'
    },
    {
      title: 'j',
      message: 'ava'
    },
    {
      title: 'S',
      message: 'cript'
    }
  ];
  res.render('pages/index', {
    qualityObject: quality
  });
})

app.get('/about', function(req, res){
  res.render('pages/about')
})

app.listen(8080)