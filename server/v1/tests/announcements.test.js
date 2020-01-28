/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import data from './dataToUseInTest';
import {generateToken} from '../helpers/handleTokens';

chai.use(chaiHttp);
const expect = chai.expect;

// ANNOUNCEMENTS
describe('Announcements', () => {

    it('create announcement with valid data should return object with 201 status, containing properties', (done) => { 
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
    it('create announcement with invalid data should return an error with 400 status, containing properties status and error', (done) => { 
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
    it('Getting all announcement for the current user with valid token should return object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/get-all-announcement-for-current-user`)
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
    // requesting all announcement with valid token
    it('Getting all announcement for the current user with valid token should return object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidTokenNoAnnouncs);
        chai.request(server)
            .get(`/api/v1/announcements/get-all-announcement-for-current-user`)
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

    // requesting all announcement with invalid token
    it('Getting all announcements for the current user with invalid token should return an error with 401 status, and an object containing properties status and error', (done) => { 
        
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
    // requesting a specific announcement by status with invalid token
    it('Testing get specific announcement by status with invalid status : Should return an error with 404 status, and an object containing properties status and error', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get(`/api/v1/announcements/get-specific-announcement-by-status/unsorterfcjgdcg`)
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
    // admin changes the status of announcement
    it('Testing admin change status of announcement with invalid ID : Should return an object with 200 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .patch(`/api/v1/announcements/admin-change-announcement-status`)
            .set('authorization', `Bearer ${token}`)
            .send(data.dataToChangeAnnouncementStatusInvalidID)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(500);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });
    // admin changes the status of announcement with a not admin credentials
    it('Testing admin change status of announcement with a not admin credentials: Should return an object with 403 status, containing properties status and data', (done) => { 
        const token = generateToken(data.dataOfAValidTokenNotAdmin);
        chai.request(server)
            .patch(`/api/v1/announcements/admin-change-announcement-status`)
            .set('authorization', `Bearer ${token}`)
            .send(data.dataToChangeAnnouncementStatus)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(403);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
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
    //User update his announcemment
    it('Testing user updates his announcement: with invalid ID should return an object with 500 status, containing properties status and data',
        (done) => { 
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .patch('/api/v1/announcements/user-updates-his-announcement')
            .send(data.toTestUserUpdateAnnouncementDetailsNotExist)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(500);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
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
     //admin delete announcement
    it(`Testing delete announcement : Should return an error with 404 status, 
    containing properties status and data`, (done) => { 
            const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .delete(`/api/v1/announcements/admin-delete-announcement/1000000000000000000011111110`)
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
     //admin delete announcement
    it(`Testing delete announcement : Should return an error with 403 status, 
    containing properties status and data`, (done) => { 
            const token = generateToken(data.dataOfAValidTokenNotAdmin);
        chai.request(server)
            .delete(`/api/v1/announcements/admin-delete-announcement/0`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(403);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });
     //admin delete announcement
    it(`Testing delete announcement : Should return an error with 500 status, 
    containing properties status and data`, (done) => { 
            const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .delete(`/api/v1/announcements/admin-delete-announcement/0`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(500);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
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
                expect(res).to.have.status(404);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
    });

});

// testing default route
describe('Default route', () => {
    it('Default rout should return an object with status code of 200 and containing properties status and message',
        (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    if (err) done(err);
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('status');
                    expect(res.body).to.have.property('message');
                    done();
                });
        });
});