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
            .post('/api/v2/auth/signup')
            .set('Accept', 'Application/json')
            .send(data.userTest.expectedDataForSignup)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    it('Should return an object with status code 400, and a message', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signup')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataForSignup)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });
    it('Signup with existing email should return an object with status code 400, and a message', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signup')
            .set('Accept', 'Application/json')
            .send(data.userTest.expectedDataForSignupWithUsedEmail)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // for signin
    it('Signin with valid token should return an object with status code 200 and an object which contains token and user data', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.expectedDataForLogin)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    // for signin with wrong data
    it('Signin with invalid credentials should return an error with status code 401 and message', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataForLoginWithNoPassword)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // for signin with wrong data
    it('Signin with email not exists should return an error with status code 403 and message', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataEmailNotExist)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(403);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

});