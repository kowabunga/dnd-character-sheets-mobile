import chai from 'chai';
import chaiHttp from 'chai-http';
import {
  createUserData,
  userDataLogin,
  incorrectUserLoginEmail,
  incorrectUserLoginPassword,
} from '../../../test_suite/data/userData.js';

//These tests will check whether the jwt authentication functions
// **NOTE** - while it is true that a number of the other test cases require authentication to pass, these test will specifically check for success *and* failure on authentication

const { expect } = chai;
const url = 'localhost:8080/api/auth';

describe('dnd mobile app auth tests', function () {
  it('Should create user and return object', function (done) {
    chai
      .request('http://localhost:8080/api/user')
      .post('/')
      .send(createUserData)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res).to.have.nested.property('body.createdUser.name');
        expect(res).to.have.nested.property('body.createdUser.email');
        expect(res).to.not.have.nested.property('body.createdUser.password');
        expect(res).to.not.have.nested.property('body.createdUser.characters');
        expect(res).to.not.have.nested.property(
          'body.createdUser.passwordResetToken'
        );
        expect(res).to.not.have.nested.property(
          'body.createdUser.passwordResetTokenExpiry'
        );
        expect(res).to.not.have.nested.property('body.createdUser._id');
        expect(res).to.not.have.nested.property('body.createdUser.__v');
        done();
      });
  });

  it('Should catch incorrect password', function (done) {
    chai
      .request(url)
      .post('/')
      .send(incorrectUserLoginPassword)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        expect(res).to.have.nested.property('body.msg', 'Incorrect password');
        done();
      });
  });

  it('Should catch unregistered email', function (done) {
    chai
      .request(url)
      .post('/')
      .send(incorrectUserLoginEmail)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        expect(res).to.have.nested.property(
          'body.msg',
          'Email not registered. Sign up'
        );
        done();
      });
  });

  it('Should successfully log in and return jwt"', function (done) {
    chai
      .request(url)
      .post('/')
      .send(userDataLogin)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.be.json;
        done();
      });
  });
});
