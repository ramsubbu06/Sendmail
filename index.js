
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var app = express();

app.use(express.static(__dirname + '/client'));
//app.use(express.static(__dirname + '/adupload'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sendmail route
app.post('/sendmail', function(req, res){
	console.log('sendmail route');
    var options = {
        auth: {
            api_key: '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'
        }
    }
    var mailer = nodemailer.createTransport(sgTransport(options));
    mailer.sendMail(req.body, function(error, info){
        if(error){
            res.status('401').json({err: info});
        }else{
            res.status('200').json({success: true});
        }
    });
});

// Include the node file module
var fs = require('fs');

// Post files

var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();

app.post('/upload',multipartMiddleware, function(req, res) {
  fs.readFile(req.files.image.path, function (err, data) {
    var imageName = req.files.image.name
    // If there's an error
    if(!imageName){
      console.log("There was an error")
      res.redirect("/");
      res.end();
    } else {
      var newPath = __dirname + "/uploads/fullsize/" + imageName;
      // write file to uploads/fullsize folder
      fs.writeFile(newPath, data, function (err) {
        // let's see it
        res.redirect("/uploads/fullsize/" + imageName);
      });
    }
  });
});

// Show files
app.get('/uploads/fullsize/:file', function (req, res){
  file = req.params.file;
  var img = fs.readFileSync(__dirname + "/uploads/fullsize/" + file);
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

// Start server
var port = 8080, ip = "127.0.0.1";
app.listen(port, ip, function() {
  console.log('Express server listening on http://localhost:%d', port);
});
	