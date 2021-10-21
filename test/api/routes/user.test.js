import chai from 'chai';
import chaiHttp from 'chai-http';
import {
  createUserData,
  updatedUserData,
} from '../../../test_suite/data/userData.js';

chai.should();
chai.use(chaiHttp);

let result = null;
let url = 'http://localhost:8080/api/user';

const { expect } = chai;

//-CRUD OPERATIONS

//Test suite should be run on empty db
//First two tests will fail if user already exists (should return status 400)

//This will create a user
describe('dnd mobile app user tests', function () {
  it('Should delete user for testing if already exists 1', function (done) {
    chai
      .request(url)
      .delete('/dev/testUpdated@test.com')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should delete user for testing if already exists 2', function (done) {
    chai
      .request(url)
      .delete('/dev/test@test.com')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should create user and return object', function (done) {
    chai
      .request(url)
      .post('/')
      .send(createUserData)
      .end(function (err, res) {
        result = res;
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

  it('Should not create new user with same information', function (done) {
    chai
      .request(url)
      .post('/')
      .send(createUserData)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        expect(res).to.not.have.nested.property('body.createdUser');
        done();
      });
  });

  it('Should get the user based off the mongodb _id acquired in previous test result, mimicking getting token from local storage', function (done) {
    chai
      .request(url)
      .get('/')
      .set('x-auth-token', result.body.token)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.have.nested.property('body._id');
        expect(res).to.have.nested.property('body.name', 'Test Testerton');
        expect(res).to.have.nested.property('body.email', 'test@test.com');
        done();
      });
  });

  it('Should update user from mongodb _id with given data', function (done) {
    chai
      .request(url)
      .put('/')
      .set('x-auth-token', result.body.token)
      .send(updatedUserData)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res).to.have.nested.property('body.msg', 'Profile updated');
        done();
      });
  });

  it('Should delete user', function (done) {
    chai
      .request(url)
      .delete('/')
      .set('x-auth-token', result.body.token)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.nested.property('body.msg', 'Account deleted');
        done();
      });
  });
});
