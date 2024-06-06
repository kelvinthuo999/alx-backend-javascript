// api.test.js

const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Cart Page', function() {
  it('returns correct status code when :id is a number', function(done) {
    request({
      url: 'http://localhost:7865/cart/123',
      method: 'GET'
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct status code when :id is NOT a number (=> 404)', function(done) {
    request({
      url: 'http://localhost:7865/cart/hello',
      method: 'GET'
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

