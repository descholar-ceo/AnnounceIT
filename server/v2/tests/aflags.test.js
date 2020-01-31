/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import data from './dataToUseInTest';
import { generateToken } from '../helpers/handleTokens';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Flags', () => {

    // testing add flag
    it('Testing adding new Flag: Should return an array with status 201', (done) => {
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .post('/api/v2/flags/add-new-flag')
            .set('authorization', `${token}`)
            .send(data.toTestAddNewFlag)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('success');
                expect(res.body).to.have.property('data').to.be.an('array').to.have.length.greaterThan(0);
                done();
            });
    });

    // testing get flag by announcid
    it('Testing getting a specific flag should return an array', (done) => {
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get('/api/v2/flags/get-flag-by-announcement-id/2')
            .set('authorization', `${token}`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('success');
                expect(res.body).to.have.property('data').to.be.an('array').to.have.length.greaterThan(0);
                done();
            });
    });

    // testing get flag by reason
    it('Testing getting flags by status: Should return an object with status 200', (done) => {
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get('/api/v2/flags/get-flag-by-reason/RealEstate')
            .set('authorization', `${token}`)
            .end((err, res) => {
                if (err) done(err);
                 expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('success');
                expect(res.body).to.have.property('data').to.be.an('array').to.have.length.greaterThan(0);
                done();
            });
    });

    // testing get flag by wrong param
     it('Testing getting flags by status: Should return an object with status 200', (done) => {
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .get('/api/v2/flags/get-flag-by-announcement-id/hello')
            .set('authorization', `${token}`)
            .end((err, res) => {
                if (err) done(err);
                 expect(res).to.have.status(404);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('error');
                expect(res.body).to.have.property('error').to.equal('Enter a number!');
                done();
            });
    });
    

    // testing add flag with invalid announcid
    it('Testing adding new Flag: Should return an array with status 201', (done) => {
        const token = generateToken(data.dataOfAValidToken);
        chai.request(server)
            .post('/api/v2/flags/add-new-flag')
            .set('authorization', `${token}`)
            .send(data.toTestAddNewFlagWithInValidId)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status').to.equal('error');
                expect(res.body).to.have.property('error').to.equal('The announcement you want to flag, does\'t exist');
                done();
            });
    });

});