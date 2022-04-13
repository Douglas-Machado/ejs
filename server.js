const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  const quality = [
    {
      title: 'L',
      message: 'inda'
    },
    {
      title: 'O',
      message: 'rgulhosa'
    },
    {
      title: 'R',
      message: 'omco'
    },
    {
      title: 'E',
      message: 'splendida'
    },
    {
      title: 'N',
      message: 'arguines'
    },
    {
      title: 'A',
      message: 'stronauta'
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