// 4-payment.test.js
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('calls Utils.calculateNumber with correct arguments and logs the correct message', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Add a spy to verify console.log outputs
    const consoleSpy = sinon.spy(console, 'log');
    
    // Call the function under test
    sendPaymentRequestToApi(100, 20);
    
    // Assert that the stub was called once with the correct arguments
    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    
    // Assert that console.log was called with the correct message
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');
    
    // Restore the stub and spy to avoid affecting other tests
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});

