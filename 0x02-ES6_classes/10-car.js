const CAR_PROPERTIES = Symbol('car_properties');

export default class Car {
  constructor(brand, motor, color) {
    this[CAR_PROPERTIES] = {
      brand,
      motor,
      color,
    };
  }

  get brand() {
    return this[CAR_PROPERTIES].brand;
  }

  get motor() {
    return this[CAR_PROPERTIES].motor;
  }

  get color() {
    return this[CAR_PROPERTIES].color;
  }

  cloneCar() {
    const { brand, motor, color } = this[CAR_PROPERTIES];
    return new Car(brand, motor, color);
  }
}
