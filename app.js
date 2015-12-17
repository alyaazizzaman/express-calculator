var express = require('express');
app = express();

//when user visits home page, it displays "Express Calculator"
app.get('/', function(req, res) {
  res.send("Express Calculator");
});

// // when user visits /add/9/3, it displays 12
// app.get('/add/9/3', function(req, res) {
//   res.send('12');
// });
//
// //when user visits /sub/9/3, it displays 6
// app.get('/sub/9/3', function(req, res) {
//   res.send('6');
// });
//
// //when user visits /mult/9/3, it displays 27
// app.get('/mult/9/3', function(req, res) {
//   res.send('27');
// });
//
// //when user visits /div/9/3, it displays 3
// app.get('/div/9/3', function(req, res) {
//   res.send('3');
// });

//when a user visits /:operation/:inputOne/:inputTwo
//it displays the result of that operations

app.get('/:operation/:inputOne/:inputTwo', function(req, res) {
  if (req.params.operation === 'add') {
    res.sendStatus(parseInt(req.params.inputOne) + parseInt(req.params.inputTwo));
  } else if (req.params.operation === 'sub') {
    res.sendStatus(parseInt(req.params.inputOne) - parseInt(req.params.inputTwo));
  } else if (req.params.operation === 'mult') {
    res.sendStatus(parseInt(req.params.inputOne) * parseInt(req.params.inputTwo));
  } else if (req.params.operation === 'div') {
    res.sendStatus(parseInt(req.params.inputOne) / parseInt(req.params.inputTwo));
  } else {
    res.send("error");
  }
});

app.listen(8000, function() {
  console.log("Starting a server on localhost:8000");
});
