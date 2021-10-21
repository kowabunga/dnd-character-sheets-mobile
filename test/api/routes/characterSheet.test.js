import chai from 'chai';
import chaiHttp from 'chai-http';
import {
  characterData1,
  characterData2,
  updatedCharacterData1,
} from '../../../test_suite/data/characterSheetsData.js';

chai.should();
chai.use(chaiHttp);

let url = 'http://localhost:8080/api/character';
let result = null;
let characterSheets = null;

const { expect } = chai;

//CRUD OPERATIONS
describe('dnd mobile app character tests', function () {
  it('Should delete user for testing if already exists', function (done) {
    chai
      .request('http://localhost:8080/api/user')
      .delete('/dev/test@test.com')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should create user and return object (with token)', function (done) {
    chai
      .request('http://localhost:8080/api/user')
      .post('/')
      .send({
        name: 'Test Testerton',
        email: 'test@test.com',
        password: '123456',
        confirmPassword: '123456',
      })
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

  it('Should create a character sheet for previously created user', function (done) {
    chai
      .request(url)
      .post('/')
      .set('x-auth-token', result.body.token)
      .send(characterData1)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        done();
      });
  });

  it('Should create a second character sheet for previously created user', function (done) {
    chai
      .request(url)
      .post('/')
      .set('x-auth-token', result.body.token)
      .send(characterData2)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        done();
      });
  });

  it('Should get all charactersheets', function (done) {
    chai
      .request(url)
      .get('/')
      .set('x-auth-token', result.body.token)
      .end(function (err, res) {
        characterSheets = res.body;
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(characterSheets).to.have.lengthOf(2);
        done();
      });
  });

  it(`Should get character sheet from a given id`, function (done) {
    chai
      .request(url)
      .get(`/${characterSheets[0]._id}`)
      .set('x-auth-token', result.body.token)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });

  it('Should fail to get charactersheet as name does not exist', function (done) {
    chai
      .request(url)
      .get(
        `/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTcxYzg1ZThmYjc1NjBmOTBhOGY3NDQiLCJpYXQiOjE2MzQ4NDY4MTUsImV4cCI6MTYzNTQ1MTYxNX0.KsVtjCUfv4UU-c0lv8D8BTiflRz2nuKTP3EpUImtAis`
      ) //This is an old, but valid, mongodb _id
      .set('x-auth-token', result.body.token)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.have.nested.property(
          'body.msg',
          'Invalid character sheet id'
        );
        done();
      });
  });

  it('Should delete all character sheets', function (done) {
    chai
      .request(url)
      .delete('/dev')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should get all charactersheets after deleting', function (done) {
    chai
      .request(url)
      .get('/')
      .set('x-auth-token', result.body.token)
      .end(function (err, res) {
        characterSheets = res.body;
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(characterSheets).to.have.lengthOf(0);
        done();
      });
  });
});
