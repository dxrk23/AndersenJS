function makeObjectDeepCopy(objectToCopy) {
  let copiedObject = {};

  for (let key in objectToCopy) {
    if (typeof objectToCopy[key] === 'object') {
      copiedObject[key] = makeObjectDeepCopy(objectToCopy[key]);
    } else {
      copiedObject[key] = objectToCopy[key];
    }
  }

  return copiedObject;
}

function selectFromInterval(
  arrayOfNumbers,
  firstIntervalValue,
  secondIntervalValue
) {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error('The first argument must be an array.');
  }

  const maxIntervalValue = Math.max(firstIntervalValue, secondIntervalValue);
  const minIntervalValue = Math.min(firstIntervalValue, secondIntervalValue);
  const result = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (typeof arrayOfNumbers[i] !== 'number') {
      throw new Error('The array must contain only numbers.');
    }
    if (
      arrayOfNumbers[i] >= minIntervalValue &&
      arrayOfNumbers[i] <= maxIntervalValue
    ) {
      result.push(arrayOfNumbers[i]);
    }
  }

  return result;
}

const myIterable = { from: 1, to: 10 };

myIterable[Symbol.iterator] = function* () {
  if (this.from > this.to) {
    throw new Error('The first argument must be less than the second.');
  }

  if (typeof this.from !== 'number' || typeof this.to !== 'number') {
    throw new Error('The arguments must be numbers.');
  }

  if (this.from === undefined || this.to === undefined) {
    throw new Error('The arguments must be defined.');
  }

  for (let i = this.from; i <= this.to; i++) {
    yield i;
  }
};

