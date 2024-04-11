/**
 * Represents a car with brand, motor, and color attributes.
 */
export default class Car {
  /**
     * Create a car.
     * @param {string} brand - The brand of the car.
     * @param {string} motor - The motor type of the car.
     * @param {string} color - The color of the car.
     */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
     * Clone the current car.
     * @returns {Car} A new car instance with the same brand, motor, and color.
     */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
