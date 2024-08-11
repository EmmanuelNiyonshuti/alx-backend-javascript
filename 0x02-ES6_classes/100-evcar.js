// Implements a car named EVCar
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Clone = Object.getPrototypeOf(this.constructor);
    return new Clone();
  }
}
