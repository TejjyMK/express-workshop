var express = require('express');

var app = express();

app.listen(3000,function () {
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