// api.test.js

const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Available Payments Endpoint', function() {
  it('returns correct response', function(done) {
    request({
      url: 'http://localhost:7865/available_payments',
      method: 'GET'
    }, function(error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login Endpoint', function() {
  it('returns correct response for a given username', function(done) {
    request({
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' },
      headers: { 'Content-Type': 'application/json' }
    }, function(error, response, body) {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

