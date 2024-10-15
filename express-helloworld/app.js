var express = require('express');
var app = express();
var response;

app.get('/', function (req, res) {
      response = 'This is version 3 of the app.' + '\n';
          res.send(response);
          });

          var server = app.listen(process.env.PORT || 8080, function () {
                console.log('App is running on port ' + server.address().port);
          });
         