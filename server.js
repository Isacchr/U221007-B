const express = require('express');
const fs = require('fs');
const server = express();
const bodyParser = require('body-parser');

var contacts;
var newContacts;

fs.readFile('data.json', (err, data) => {

    contacts = JSON.parse(data);    
    
});

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true}));


server.get('/', (req, res) => {

    fs.readFile('/public/index.html', (err, data) => {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();

    });

});


server.get('/add', (req, res) => {

    res.send(JSON.stringify(contacts));

    contacts = newContacts;

});

server.get('/contacts', (req, res) => {

    res.send(JSON.stringify(contacts));

});

server.get('/save', (req, res) => {

    var newJsonContent = JSON.stringify(contacts);

    fs.writeFile("data.json", newJsonContent, 'utf8', function (err) {

        res.end();

    })


});

server.listen(8080);