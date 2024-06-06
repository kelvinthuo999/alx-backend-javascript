// Import the necessary modules
const { sendPaymentRequestToAPI } = require('./5-payment');

// Spy on console.log using Mocha's spy feature
let logSpy;

beforeEach(function() {
    // Setup the spy before each test
    logSpy = sinon.spy(console, 'log');
});

afterEach(function() {
    // Restore the original console.log after each test
    logSpy.restore();
});

describe('Payment Tests', function() {
    it('should log "The total is: 120" when sending payment request with amounts 100 and 20', function() {
        const amount1 = 100;
        const amount2 = 20;

        sendPaymentRequestToAPI(amount1, amount2);

        expect(logSpy.calledOnce).to.be.true;
        expect(logSpy.firstCall.args[0]).to.equal('The total is: 120');
    });

    it('should log "The total is: 20" when sending payment request with amounts 10 and 10', function() {
        const amount1 = 10;
        const amount2 = 10;

        sendPaymentRequestToAPI(amount1, amount2);

        expect(logSpy.calledOnce).to.be.true;
        expect(logSpy.firstCall.args[0]).to.equal('The total is: 20');
    });
});
