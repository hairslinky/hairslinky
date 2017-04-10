var express = require('express');

//var https = require('https');
var PORT = process.env.PORT || 3000;
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    return next();
});
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.sendStatus(200);
    }
    else {
    //move on
      next();
    }
});



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joshua.greenslade6@gmail.com',//'hello@lavitaglam.com',
        pass: 'IW2AjxHi'//'Invictusjan93'
    }
});

app.post('/api/email/', function(req, res, next){
    console.log(req.body);
    // setup email data with unicode symbols
    var result = '';
    Object.keys(req.body).forEach(function(key){result += key + ": " + req.body[key] + "\n"});
    let mailOptions = {
        //from: '"Joshua " <joshua.aaaagreenslade6@gmail.com>', // sender address
        to: 'joshua.greenslade6@gmail.com',//'hello@lavitaglam.com', // list of receivers
        subject: 'New Hairslinkey Order', // Subject line
        text: result//'I figured out how to send an email from a server and it is freeeeee!!!!!' // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
res.end("yo yo yo")
});


app.use(function (req, res, next){
    console.log("HTTP Response", res.statusCode);
});


app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});