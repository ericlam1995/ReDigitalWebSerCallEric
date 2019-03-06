const express = require('express'); //call express package
const bodyParser = require('body-parser');//call bodyParser package
const app = express();
const request = require('request');//Declare package "Request" to make request
const fs = require('fs');//Using fs to get file

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) { //Using express to allow any method
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var server = app.listen(3000, "127.0.0.1", function () {//This is where to start server in Node.js

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});


const options = {//Set up options to make 
    url: "https://test.edm.clouddirect.biz/dev/ey/listtemplates?clientid=ach&sourcesystem=gw_pc",
    headers: {
        'content-type': "application/json"
    },
    agentOptions: {//Call certificate file for access
        pfx: fs.readFileSync('CloudDirect client_test.p12'),
        passphrase: ''

    },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false
};

app.get('/', function (req, res) {//Type url "http://127.0.0.1:3000/" to show main page of web service
    res.end(JSON.stringify("Welcome to Web Service Call"));
});

app.get('/list', function (req, res) {//Type url "http://127.0.0.1:3000/list" to show list in JSON
    request.get(options, (error, response, body) => {
        if(error){//If error detected, throws into exception
            throw error
        }
        try{
            res.end(JSON.stringify(body));//This will display list of JSON
        }catch(error){
            res.end(JSON.stringify(error));
        }
        
    });
});

module.exports = app;