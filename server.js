var listenPort   = process.env.PORT || 3000,
    express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    multer       = require('multer'),
    cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(cookieParser());

app.use(function(req, res) {
  res.json({
    method: req.method,
    pathname: req.pathname,
    query: req.query,
    cookies: req.cookies,
    headers: req.headers,
    body: req.body,
  });
  console.log(req);
});

app.listen(listenPort);
console.log('Listening on port ' + listenPort);