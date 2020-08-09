// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
const public_DIR = path.resolve(__dirname, "public");
const db = require("./db/db.json");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
    {
        name: "Yoda",
        phone: 65432,
        email: "e@k",
        id: 2000
    },
];
    var waitlist = [];
    //   {
    //     name: "Darth Maul",
    //     phone: 876543,
    //     email: "f@l",
    //     id: 1200
    //   },
    //   {
    //     name: "Obi Wan Kenobi",
    //     phone: 65435,
    //     email: "er@hj",
    //     id: 1350
    //   }


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(public_DIR, "notes.html"));
});
app.get("/", function (req, res) {
    res.sendFile(path.join(public_DIR, "index.html"));
});




app.get("/api/notes", function (req, res) {
    return res.json(db);
});
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // var newTable = req.body;

    console.log(req.body);
    db.push(req.body);
    res.json(true)
    

    // tables.push(newTable);

    // res.json(newTable);
});

app.get("*", function (req, res) {
    res.send('404 file not found')
    // res.sendFile(path.join(public_DIR, "404.html"));
});

// Displays a single character, or returns false
// app.get("/api/tables/", function (req, res) {
//     var chosen = req.params.tables;
//     if (tables.length < 5) {
//         tables.push(reg.body)
//         res.json(true)
//     } else {
//         waitlist.push(reg.body)
//         res.json(false);
//     }
// });

// Create New Characters - takes in JSON input


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
