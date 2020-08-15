var path = require("path");
const fs = require("fs");
const public_DIR = path.resolve(__dirname,"..", "public");

module.exports = (app) => {
    app.get("/", function (req, res) {
        // sending root html file
        res.sendFile(path.join(public_DIR, "index.html"));
    });
    app.get("/notes", function (req, res) {
        // sending front-end notes html file to edit notes
        res.sendFile(path.join(public_DIR, "notes.html"));
    });
    app.get("*", function (req, res) {
        // if not matched it sending cannot find file
        res.sendFile(path.join(public_DIR, "404.html"));  
    });
    
}