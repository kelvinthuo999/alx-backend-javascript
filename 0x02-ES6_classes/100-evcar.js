import Car from './10-car';

/**
 * Represents an electric vehicle.
 * Extends the Car class.
 */

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
