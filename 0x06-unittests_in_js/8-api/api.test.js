// api.test.js

const request = require('request');
const chai = require('chai');
const expect = chai.expect; // Correctly assign expect from chai

describe('Index Page', function() {
  it('correct status code?', function(done) {
    request('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result?', function(done) {
    request('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('server', function(done) {
    request('http://localhost:7865/', function(error, response, body) {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
