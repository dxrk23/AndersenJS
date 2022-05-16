function concatStrings(firstString = '', separator = '') {
    return function(nextString){
        if(typeof separator !== 'string'){
            separator = '';
        }

        if(typeof nextString !== 'string'){
            return `${firstString}`;
        }

        return concatStrings(`${firstString}${separator}${nextString}`, separator);
    }
}

class Calculator {
    constructor(firstNumber, secondNumber) {
        if (arguments.length > 2) {
            throw new Error('Too many arguments');
        }

        this.setX(firstNumber);
        this.setY(secondNumber);
    }

    isInvalidNumber(number) {
        if (typeof number !== 'number') {
            return true;
        }

        return number === Infinity || number === -Infinity || Object.is(number, NaN)
    }

    setX(num) {
        if (this.isInvalidNumber(num)) {
            throw new Error('Invalid input');
        }

        this.firstNumber = num;
    }

    setY(num) {
        if (this.isInvalidNumber(num)) {
            throw new Error('Invalid input');
        }

        this.secondNumber = num;
    }

    logSum = () => {
        console.log(this.firstNumber + this.secondNumber);
    }

    logMul = () => {
        console.log(this.firstNumber * this.secondNumber);
    }

    logSub = () => {
        console.log(this.firstNumber - this.secondNumber);
    }

    logDiv = () => {
        if (this.secondNumber === 0) {
            throw new Error('Division by zero');
        }

        console.log(this.firstNumber / this.secondNumber);
    }
}
