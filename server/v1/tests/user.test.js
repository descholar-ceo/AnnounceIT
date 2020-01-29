/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import data from './dataToUseInTest';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Authentication', () => {

    // user signup
    it('Should return an object with status code 201 and an object containing  contains token and user data',
        (done) => {
        chai.request(server)
            .post('/api/v1/auth/signup')
            .set('Accept', 'Application/json')
            .send(data.userTest.expectedDataForSignup)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('success');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('token');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('first_name').to.equal('descholar');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('last_name').to.equal('ceo');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('email').to.equal('cool@gmail.com');
                done();
            });
    });

    it('Should return an object with status code 400, and a message', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signup')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataForSignup)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('error');
                expect(res.body).to.have.property('error').to.equal('Validations to your data has failed, make sure you follow all rules!');
                done();
            });
    });
    it('Signup with existing email should return an object with status code 400, and a message', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signup')
            .set('Accept', 'Application/json')
            .send(data.userTest.expectedDataForSignupWithUsedEmail)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('error');
                expect(res.body).to.have.property('error').to.equal('The email you are trying to register is already registered');
                done();
            });
    });

    // for signin
    it('Signin with valid token should return an object with status code 200 and an object which contains token and user data', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.expectedDataForLogin)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('success');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('token');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('first_name').to.equal('nezago');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('last_name').to.equal('emma');
                expect(res.body).to.have.property('data').to.be.an('object').to.have.property('email').to.equal('emmamugira@gmail.com');
                done();
            });
    });

    // for signin with wrong data
    it('Signin with invalid credentials should return an error with status code 401 and message', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataForLoginWithNoPassword)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('error');
                expect(res.body).to.have.property('error').to.equal('Unknown credentials');
                done();
            });
    });

    // for signin with wrong data
    it('Signin with email not exists should return an error with status code 403 and message', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataEmailNotExist)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(403);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('error');
                expect(res.body).to.have.property('error').to.equal('Email and password mismatch');
                done();
            });
    });

});