var listenPort   = process.env.PORT || 3000,
    express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    multer       = require('multer'),
    cookieParser = require('cookie-parser'),
    os           = require('os');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(cookieParser());

app.use(function(req, res) {
  res.json({
    host: {
      hostname: os.hostname(),
      port: listenPort
    },
    request: {
      method: req.method,
      pathname: req.pathname,
      query: req.query,
      cookies: req.cookies,
      headers: req.headers,
      body: req.body
    }
  });
  console.log(req);
});

app.listen(listenPort);
console.log('Listening on port ' + listenPort);
