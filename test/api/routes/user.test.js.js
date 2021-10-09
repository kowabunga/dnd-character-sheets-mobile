import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import { createUserData } from '../../../test_suite/data/userData.js';

chai.should();
chai.use(chaiHttp);
let url = 'http://localhost:8080/api/user';
let result = null;

const { expect } = chai;

describe('dnd mobile app', function () {
  it('Should create user and return object', function (done) {
    chai
      .request(url)
      .post('/')
      .send(createUserData)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        done();
      });
  });

  it('Should not create new user with same information', function (done) {
    chai
      .request(url)
      .post('/')
      .send(createUserData)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        done();
      });
  });
});
