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

  const MAX_INTERVAL_VALUE = Math.max(firstIntervalValue, secondIntervalValue);
  const MIN_INTERVAL_VALUE = Math.min(firstIntervalValue, secondIntervalValue);
  const RESULT = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (typeof arrayOfNumbers[i] !== 'number') {
      throw new Error('The array must contain only numbers.');
    }
    if (
      arrayOfNumbers[i] >= MIN_INTERVAL_VALUE &&
      arrayOfNumbers[i] <= MAX_INTERVAL_VALUE
    ) {
      RESULT.push(arrayOfNumbers[i]);
    }
  }

  return RESULT;
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
