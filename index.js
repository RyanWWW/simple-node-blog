var express = require('express');
var path = require('path');
var session = require('express-session');
var routes = require('./routes/route');
var config = require('config-lite')(__dirname);
var pkg = require('./package');
var app = express();

//use ejs to render page
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//static file
app.use(express.static(path.join(__dirname, 'public')));

//set route on app
routes(app);

//show error
app.use(function (err, req, res, next) {
  res.render('error', {
    error: err
  });
});

/*--local--*/
app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`)
});
