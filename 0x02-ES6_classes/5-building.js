export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract class "Building" cannot be instantiated directly.');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    // eslint-disable-next-line class-methods-use-this
    throw new Error('evacuationWarningMessage method must be implemented.');
  }
}
