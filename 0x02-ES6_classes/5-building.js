/**
 * Represents a building with a square footage.
 * This is an abstract class that defines the basic structure of a building.
 * Any class extending Building must override the evacuationWarningMessage method.
 */
export default class Building {
  /**
     * Creates a new Building instance.
     * @param {number} sqft - The square footage of the building.
     * @throws {Error} - If a class extending Building does not override evacuationWarningMessage.
     */
  constructor(sqft) {
    // Check if this is being instantiated directly or if the subclass has overridden the method.
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  /**
     * Gets the square footage of the building.
     * @returns {number} - The square footage of the building.
     */
  get sqft() {
    return this._sqft;
  }
}
