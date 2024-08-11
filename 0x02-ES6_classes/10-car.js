// implements a class named Car.

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  cloneCar() {
    // creates a new instance of the class of the object it's called on.
    const Obj = this.constructor;
    return new Obj();
  }
}
