let db = require("../db/db.json");

module.exports = (app) => {
    app.get("/api/notes", function (req, res) {
        // sending a list of notes 
        return res.json(db);
    });
    app.post("/api/notes", function (req, res) {
        // posting the note into the db.json 
        let objaddID={
           title: req.body.title,
           text: req.body.text,
           id: db.length
        };
        db.push(objaddID);
        res.json(true)     
    });
    app.delete('/api/notes/:id', function (req, res){
        // deleting one note in db.json
     db.splice(req.params.id,1);
     db.forEach(note=> {
         note.id=db.indexOf(note)
     })
      res.json("true");  
    });  
    app.put('/api/notes/:id', function (req, res){
        // edit the existing note in db.json
        db[req.params.id].title=req.body.title;
        db[req.params.id].text=req.body.text;
        res.json("true");   
    });   
}