
// var expect  = require('chai').expect;
var request = require('request');
var db = require("../db/db.json");
const server = require("../server.js");
const app = server.app;
const chai = require("chai");
const chaiHttp = require("chai-http");
db = [];
const { expect } = chai;
chai.use(chaiHttp);
// console.log("before"+db);
describe("Server test html routes", () => {
  it(" Main page test", done => {
    chai
      .request(app).get("/")
      .end((err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.headers["content-type"]).to.equals("text/html; charset=UTF-8");
        done();
      });
  });
  it(" Edit note page test", done => {
    chai
      .request(app).get("/notes")
      .end((err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.headers["content-type"]).to.equals("text/html; charset=UTF-8");
        done();
      });
  });
});
describe("Server test part one", () => {

  it(" POST testing", done => {
    chai
      .request(app).post("/api/notes").send({ title: "test1", text: "test1"})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.equals(true);
        done();
      });
  });
  
  it(" GET testing", done => {
    chai
      .request(app).get("/api/notes")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
  it(" PUT testing", done => {
    chai
      .request(app).put("/api/notes/0")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.equals('true');
        done();
      });
  });
});

describe("Server test part two", () => {
  
  it(" DELETE testing", done => {
    chai
      .request(app).delete("/api/notes/0")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.equals('true');
        done();
      });
  });
});



