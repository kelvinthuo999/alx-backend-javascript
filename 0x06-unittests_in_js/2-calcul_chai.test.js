// 2-calcul_chai.test.js
const { expect } = require('chai');
let calculateNumber;

import('./2-calcul_chai.js')
 .then((mod) => {
    calculateNumber = mod.calculateNumber;
    describe('calculateNumber', () => {
      it('should perform operations based on type', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });

      // Additional edge cases can be added here
    });
  })
 .catch((err) => console.error(err));
