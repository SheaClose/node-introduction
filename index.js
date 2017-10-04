const express = require('express'),
  bodyParser = require('body-parser'),
  port = 3000,
  app = express(),
  booksCtrl = require('./server/controllers/books_controller.js');

app.use(express.static(__dirname + '/public/build'));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/api/books', booksCtrl.read);
app.post('/api/books', booksCtrl.create);
app.put('/api/books/:id', booksCtrl.update);
app.delete('/api/books/:id', booksCtrl.remove);
app.listen(port, function() {
  console.log('Server listening on port', port);
});
