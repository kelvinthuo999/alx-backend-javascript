// 3-payment.test.js
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('calls Utils.calculateNumber with correct arguments', () => {
    // Correctly creating a spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function under test
    sendPaymentRequestToApi(100, 20);
    
    // Assert that the spy was called once with the correct arguments
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    
    // Restore the spy to avoid affecting other tests
    spy.restore();
  });
});

