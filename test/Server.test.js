
// var expect  = require('chai').expect;
var request = require('request');
var db = require("../db/db.json");
const app = require("../server.js");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server test:", () => {

  it(" POST testing", done => {
    chai
      .request('http://localhost:3030').post("/api/notes").send({ title: "test1", text: "test1", id: 0 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.equals(true);
        done();
      });
  });
  it(" DELETE testing", done => {
    chai
      .request('http://localhost:3030').delete("/api/notes/0")
      .end((err, res) => {
        console.log(db)
        expect(res).to.have.status(200);
        expect(res.body).to.equals('true');
        done();
      });
  });

  it(" PUT testing", done => {
    chai
      .request('http://localhost:3030').put("/api/notes/0")
      .end((err, res) => {
        console.log(db)
        expect(res).to.have.status(200);
        expect(res.body).to.equals('true');
        done();
      });
  });
});

it('Main page test', function (done) {
  request('http://localhost:3030', function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    expect(response.headers["content-type"]).to.equals("text/html; charset=UTF-8");
    expect(response.statusMessage).to.equals("OK");
    done();
  });
});

it('Edit note page test ', function (done) {
  request('http://localhost:3030/notes', function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    expect(response.headers["content-type"]).to.equals("text/html; charset=UTF-8");
    expect(response.statusMessage).to.equals("OK");
    done();
  });
});
it('API route test', function (done) {
  request('http://localhost:3030/api/notes', function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    expect(body).to.equals('[{"title":"test1","text":"test1","id":0}]');
    done();
  });
});


// function test(){
// db=[];
// db.push({title: "test1",text: "test1",id: 0});
// }
// test();
// console.log(db)



//   it("server starts edit notes page ", done => {
//     chai
//       .request(app)
//       .get("/api/notes")
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.equals("success");
//         expect(res.body.message).to.equals("Edit notes");
//         done();
//       });
// it("adds 2 numbers", done => {
//   chai
//     .request(app)
//     .post("/add")
//     .send({ num1: 5, num2: 5 })
//     .end((err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.body.status).to.equals("success");
//       expect(res.body.result).to.equals(10);
//       done();
//     });
// });



// });


