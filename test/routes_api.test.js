"use strict";

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app/app');
let should = chai.should();

chai.use(chaiHttp);


describe('Testing routes API', () => {

  //Test the /GET /sports route
  describe('/GET /sports', () => {
      it('should list all sports on GET', (done) => {
            chai.request(app)
            .get('/sports')
            .end((err, res) => {
                should.equal(err, null); 
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.be.at.least(1);
                res.body[0].should.be.a('object'); 
                res.body[0].should.have.property('id'); 
                res.body[0].should.have.property('title').and.to.be.a('string');
              done();
            });
      });
  });  

  //Test the /GET /sports<id> route
  describe('GET /sports/<id>', () => {
      it('should list all events under a particular sport on GET', (done) => {
            chai.request(app)
            .get('/sports/100')
            .end((err, res) => {
                should.equal(err, null); 
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.be.at.least(1);
                res.body[0].should.be.a('object'); 
                res.body[0].should.have.property('market_id').and.to.be.a('number'); 
                res.body[0].should.have.property('market_type_id').and.to.be.a('number');
              done();
            });
      });

      it('should return no sport found on GET', (done) => {
            chai.request(app)
            .get('/sports/0')
            .end((err, res) => {
                should.not.equal(err, null); 
                res.should.be.json;
              done();
            });
      });
  });

  //Test the /GET /sports<id>/events/<id> route
  describe('GET /sports/<id>/events/<id>', () => {
      it('should list all outcomes under a particular event on GET', (done) => {
            chai.request(app)
            .get('/sports/100/events/858258800')
            .end((err, res) => {
                should.equal(err, null); 
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.be.at.least(1);
                res.body[0].should.be.a('object'); 
                res.body[0].should.have.property('price').and.to.be.a('string'); 
                res.body[0].should.have.property('price_id').and.to.be.a('number');
              done();
            });
      });

      it('should return no event found on GET', (done) => {
            chai.request(app)
            .get('/sports/100/events/0')
            .end((err, res) => {
                should.not.equal(err, null); 
                res.should.be.json;
              done();
            });
      });
  });

});