export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
     * Returns the size of the class when cast to a Number.
     * @returns {number} - The size of the class.
     */
  valueOf() {
    return this._size;
  }

  /**
     * Returns the location of the class when cast to a String.
     * @returns {string} - The location of the class.
     */
  toString() {
    return this._location;
  }
}
