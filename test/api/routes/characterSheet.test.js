import chai from 'chai';
import chaiHttp from 'chai-http';
import {
  characterData1,
  updatedCharacterData1,
} from '../../../test_suite/data/characterSheetsData.js';

chai.should();
chai.use(chaiHttp);

let url = 'http://localhost:8080/api/character';
let result = null;
let charName = null;

const { expect } = chai;

//CRUD OPERATIONS
describe('dnd mobile app character tests', function () {
  it('Should delete user for testing if already exists', function (done) {
    chai
      .request(url)
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
        charName = res.body.characterName;
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        done();
      });
  });

  it('Should get current character sheet', function (done) {
    console.log(result);
    chai
      .request(url)
      .get(`/${result._id}`)
      .send('x-auth-token', result.body.token)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json();
        done();
      });
  });

  it('Should fail to get charactersheet as name does not exist', function (done) {
    chai
      .request(url)
      .get(`/qap3o9*#$fkhd`)
      .send('x-auth-token', result.body.token)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.have.nested.property(
          'body.msg',
          'Character sheet not found'
        );
        done();
      });
  });
});
