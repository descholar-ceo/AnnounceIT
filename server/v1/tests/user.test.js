/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import data from './dataToUseInTest';
import {generateToken} from '../helpers/handleTokens';

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
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
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
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // for signin
    it('Should return an object with status code 200 and an object which contains token and user data', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
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
    it('Should return an error with status code 400 and message', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.wrongDataForLogin)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // for signin with wrong data
    it('Should return an object with status code 400 and an object which contains token and user data', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .set('Accept', 'Application/json')
            .send(data.userTest.loginNoEmail)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });
});

// ANNOUNCEMENTS
describe('Announcements', () => {

    it('Test 1 : Should return object with 201 status, containing properties', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .post('/api/v1/announcements/create-announcement')
            .set('authorization', `Bearer ${token}`)
            .send(data.announcementTest.announcementRegisterExpectedData)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });
    it('Test 2 : Should return an error with 400 status, containing properties status and error', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .post('/api/v1/announcements/create-announcement')
            .set('authorization', `Bearer ${token}`)
            .send(data.announcementTest.announcementRegisterWrongData)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // requesting all announcement with valid token
    it('Testing get all announcements : it Should return object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/get-all-announcement-for-current-user`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                // console.log(res);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    // requesting all announcement with invalid token
    it('Testing get all announcement for the current user : Should return an error with 401 status, and an object containing properties status and error', (done) => { 
        
        chai.request(server)
            .get(`/api/v1/announcements/get-all-announcement-for-current-user`)
            .set('authorization', `Bearer ${data.fakeToken}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // requesting specic announcement with valid token
    it('Testing get specific announcement : Should return object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/get-specific-announcement/1`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    // requesting a specific announcement with invalid token
    it('Testing get specific announcement with invalid token : Should return an error with 401 status, and an object containing properties status and error', (done) => { 
        chai.request(server)
            .get(`/api/v1/announcements/get-specific-announcement/1`)
            .set('authorization', `Bearer ${data.fakeToken}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });
    // requesting a specific announcement with invalid id
    it('Testing getting specific announcement with invalid id : Should return an error with 404 status, and an object containing properties status and error', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/get-specific-announcement/0`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(404);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // requesting a specific announcement by status with invalid token
    it('Testing get specific announcement by status with invalid token : Should return an error with 401 status, and an object containing properties status and error', (done) => { 
        chai.request(server)
            .get(`/api/v1/announcements/get-specific-announcement-by-status/pending`)
            .set('authorization', `Bearer ${data.fakeToken}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });


    // requesting specific announcement with valid token
    it('Testing get specific announcement by status with valid token : Should return object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/get-specific-announcement-by-status/pending`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    // admin can get all the announcements with valid
    it('Testing admin get all announcement from all users with toke admin : Should return object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/admin-get-all-announcements-from-all-users`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    // requesting for get all the announcements with valid token but not admin
    it('Testing admin get all announcement from all users with token not admin : Should return object with 401 status, containing properties status and error', (done) => { 
        const tokenNotAdmin = generateToken(data.dataOfAValidTokenNotAdmin);
        chai.request(server)
            .get(`/api/v1/announcements/admin-get-all-announcements-from-all-users`)
            .set('authorization', `Bearer ${tokenNotAdmin}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

    // admin changes the status of announcement
    it('Testing admin change status of announcement : Should return an object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .patch(`/api/v1/announcements/admin-change-announcement-status`)
            .set('authorization', `Bearer ${token}`)
            .send(data.dataToChangeAnnouncementStatus)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

    //User update his announcemment
    it('Testing user updates his announcement: it should return an object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .patch('/api/v1/announcements/user-updates-his-announcement')
            .send(data.toTestUserUpdateAnnouncementDetails)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

     //admin delete announcement
    it(`Testing delete announcement : Should return an object with 200 status, 
    containing properties status and data`, (done) => { 
            const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .delete(`/api/v1/announcements/admin-delete-announcement/0`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('data');
                done();
            });
    });

});