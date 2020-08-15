// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const public_DIR = path.resolve(__dirname, "public");
// const fs = require("fs");
// var db = require("./db/db.json");
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
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});