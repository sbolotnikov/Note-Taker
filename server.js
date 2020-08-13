// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
const public_DIR = path.resolve(__dirname, "public");
var db = require("./db/db.json");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static( public_DIR));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(public_DIR, "index.html"));
});
app.get("/notes", function (req, res) {
    res.sendFile(path.join(public_DIR, "notes.html"));
});





app.get("/api/notes", function (req, res) {
    return res.json(db);
});
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // var newTable = req.body;
    let objaddID={
       title: req.body.title,
       text: req.body.text,
       id: db.length
    };
    console.log(objaddID);
    db.push(objaddID);
    res.json(true)
    

    // tables.push(newTable);

    // res.json(newTable);
});
app.delete('/api/notes/:id', function (req, res){
    console.log(req.params.id)
 db.splice(req.params.id,1);
 db.forEach(note=> {
     note.id=db.indexOf(note)
 })
    console.log(db);
  res.json("true");

});  
app.put('/api/notes/:id', function (req, res){
    console.log(req.body, req.params.id); 
    db[req.params.id].title=req.body.title;
    db[req.params.id].text=req.body.text;
    res.json("true");



});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
app.get("*", function (req, res) {
    // res.send(404)
    res.sendFile(path.join(public_DIR, "404.html"));
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
function getNextID(){
  let id=db.length;
  while (db.indexOf(id)>=0){
  id+=1;
  }
  return id;
}