class Stack {
  constructor(size = 10) {
    this.size = size;
    this.stack = new Array(size);
    this.top = -1;
  }

  push(value) {
    if (this.top === this.size - 1) {
      throw new Error('Stack is full');
    }

    this.stack[++this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      throw new Error('Stack is empty');
    }

    const value = this.stack[this.top--];

    return value;
  }

  peek() {
    if (this.top === -1) {
      throw new Error('Stack is empty');
    }

    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  toArray() {
    return this.stack.slice(0, this.top + 1);
  }

  static fromIterable(iterable) {
    const stack = new Stack();

    for (const value of iterable) {
      stack.push(value);
    }

    return stack;
  }
}

module.exports = { Stack };
