const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

app.get("/", function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return res.send({ message: "Hello World" });
});

app.get("/list-files", function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    const directoryPath = path.join(__dirname, 'archivos');

    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            return res.status(500).send({ message: "Unable to scan directory" });
        }
        return res.send({ files: files });
    });
});

app.listen(3000, function(){
    console.log('Server listening on port 3000');
});