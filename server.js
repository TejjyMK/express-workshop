var express = require('express');
var formidable = require('express-formidable');
var fileSystem = require('fs');

var app = express();

app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests');
});

// app.get("/", function (req, res) {
//
// res.send("Yay Node Girls");
// });
//
// app.get("/chocolate", function (req,res) {
//     res.send("Mm chocolate :o");
// });
//
// // ? Challenge
//
// app.get("/node", function (req, res) {
//     res.send("Yo Node");
// });
//
// app.get("/girls", function (req, res) {
//     res.send("Sup Girls");
// });


// ? serving static files
app.use(express.static("public"));

app.use(formidable());
//
// fileSystem.writeFile('data/posts.json',posts, function (err) {
//
// });
//
// fileSystem.readFile('data/posts.json', function (err, file) {
//     // ? Making it human readable, without to string it is in buffer format
//     console.log(file.toString());
//
//     var parsedFile = JSON.parse(file);
// });

app.post("/create-post", function (req, res) {
    // console.log('/create-post');
    // console.log(req.body);
    console.log(req.fields.blogpost);

    fileSystem.readFile('data/posts.json', function (err, file) {
        var parsedFile = JSON.parse(file);

        var time = Date.now();
        parsedFile[time] = req.fields.blogpost;

        console.log(parsedFile);
        // ? Read the file, append the new post and the write back/ save with appended post
        // ! Stringify and parse to go between json and js
        fileSystem.writeFile('data/posts.json', JSON.stringify(parsedFile), function (err, file) {

        });
    });
});

app.get("/get-posts", function (req,res) {
    res.sendFile(__dirname+'/data/posts.json');
});