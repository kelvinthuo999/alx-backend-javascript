// 6-payment_token.test.js

const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with successful data when success is true', function(done) {
        getPaymentTokenFromAPI(true)
           .then(data => {
                expect(data.data).to.equal('Successful response from the API');
                done(); // Indicate that the test has finished
            })
           .catch(err => {
                done(err); // Pass any error to the done callback
            });
    });

    it('should not return anything when success is false', function(done) {
        getPaymentTokenFromAPI(false)
           .then(data => {
                expect(data).to.be.undefined; // Expecting no data
                done(); // Indicate that the test has finished
            })
           .catch(err => {
                done(err); // Pass any error to the done callback
            });
    });
});
