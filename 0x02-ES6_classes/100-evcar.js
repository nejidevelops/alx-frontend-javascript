import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // call constructor of super class (Building)
    super(brand, motor, color);

    // Create objs
    this._range = range;
  }

  // Methods

  static get [Symbol.species]() {
    return Car;
  }
}
