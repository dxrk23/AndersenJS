class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Car is already started');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Car is already shut down');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuelVolume) {
    Validator.validateNumber(fuelVolume, 'Wrong fuel volume for filling up');

    if (this.#currentFuelVolume + fuelVolume > this.#maxFuelVolume) {
      throw new Error('Cannot add fuel more than max fuel volume');
    }

    this.#currentFuelVolume += fuelVolume;
  }

  drive(speed, driveHours) {
    Validator.validateNumber(speed, 'Wrong speed for driving');
    Validator.validateNumber(driveHours, 'Wrong drive hours for driving');

    if (speed > this.#maxSpeed) {
      throw new Error('Cannot drive, max speed is ' + this.#maxSpeed);
    }

    if (!this.#isStarted) {
      throw new Error('Cannot drive, car is not started');
    }

    if (
      this.#currentFuelVolume -
        this.#fuelConsumption * ((speed * driveHours) / 100) < 0
    ) {
      throw new Error('Cannot drive, not enough fuel');
    }

    this.#currentFuelVolume -=
      this.#fuelConsumption * ((speed * driveHours) / 100);

    this.#mileage += (speed * driveHours) / 100;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    Validator.validateStringLength(
      brand, 1, 50, 'Wrong brand length'
    );

    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    Validator.validateStringLength(
      model, 1, 50, 'Wrong model length'
    );

    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    Validator.isNumberInRange(
      yearOfManufacturing,
      1900,
      Infinity,
      'Wrong year of manufacturing'
    );

    this.#yearOfManufacturing = yearOfManufacturing;
  }

  get maxSpeed() {
    return `${this.#maxSpeed} km/h`;
  }

  set maxSpeed(maxSpeed) {
    Validator.isNumberInRange(
      maxSpeed, 100, 300, 'Wrong max speed'
    );

    this.#maxSpeed = maxSpeed;
  }

  get maxFuelVolume() {
    return `${this.#maxFuelVolume} liters`;
  }

  set maxFuelVolume(maxFuelVolume) {
    Validator.isNumberInRange(
      maxFuelVolume, 5, 20, 'Wrong max fuel volume'
    );

    this.#maxFuelVolume = maxFuelVolume;
  }

  get fuelConsumption() {
    return `${this.#fuelConsumption} liters/100 km`;
  }

  set fuelConsumption(fuelConsumption) {
    Validator.validateNumber(fuelConsumption, 'Wrong fuel consumption');

    this.#fuelConsumption = fuelConsumption;
  }

  get currentFuelVolume() {
    return `${this.#currentFuelVolume} liters`;
  }

  get isStarted() {
    return this.#isStarted ? 'Engine is started' : 'Engine is shut down';
  }

  get mileage() {
    return `${this.#mileage} km`;
  }
}

class Validator {
  static validateNumber(number, error = 'Invalid number') {
    if (typeof number !== 'number') {
      throw new Error(error);
    }

    if (number <= 0) {
      throw new Error(error);
    }
  }

  static validateStringLength(
    string,
    minLength,
    maxLength,
    error = 'Invalid string'
  ) {
    if (typeof string !== 'string') {
      throw new Error(error);
    }

    if (string.length < minLength || string.length > maxLength) {
      throw new Error(error);
    }
  }

  static isNumberInRange(number, min, max, error = 'Invalid number') {
    if (typeof number !== 'number') {
      throw new Error(error);
    }

    if (number < min || number > max) {
      throw new Error(error);
    }
  }
}
