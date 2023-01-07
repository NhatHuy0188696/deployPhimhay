const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
var http = require('http');
var finalhandler = require('finalhandler')
var _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))
const app = express();

const buildDir = path.join(__dirname, '../build');
console.log('Using files in ' + buildDir);
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
const subDir = '/';
const logRequests = false;

if (subDir === '/') {
    console.log('The server config assuming it is serving at the server root. You can control this with the `subDir` variable in index.js.');
} else {
    console.log('The server config assuming it is serving at \'' + subDir + '\'.');
}

if (logRequests) {
    console.log('The server will log all incoming request. It\'s not recommended for production use.');
}

// Serve the static files from the React app
app.use(subDir, express.static(buildDir));
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    if (logRequests) {
        console.log(req.method + ' ' + req.url);
    }
    res.sendFile(path.join(buildDir, 'index.html'));
});
var server = http.createServer(function onRequest (req, res) {
    var done = finalhandler(req, res)
   
    _favicon(req, res, function onNext (err) {
      if (err) return done(err)
   
      // continue to process the request here, etc.
   
      res.statusCode = 404
      res.end('oops')
    })
  })
   
const port = process.env.PORT || 3000;
app.listen(port);

console.log('React.JS App is running on the port ' + port);