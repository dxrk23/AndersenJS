class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.length--;

    return node.value;
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error('iterable must be iterable');
    }

    const list = new LinkedList();

    for (const value of iterable) {
      list.append(value);
    }

    return list;
  }
}

class Stack {
  constructor(size = 10) {
    this.size = size;
    this.list = new LinkedList();
  }

  push(value) {
    if (this.list.length === this.size) {
      throw new Error('Stack is full');
    }

    this.list.append(value);
  }

  pop() {
    if (this.list.length === 0) {
      throw new Error('Stack is empty');
    }

    return this.list.pop();
  }

  peek() {
    if (this.list.length === 0) {
      return null;
    }

    return this.list.tail.value;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  toArray() {
    return this.list.toArray();
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error('iterable must be iterable');
    }

    const stack = new Stack();

    for (const value of iterable) {
      stack.push(value);
    }

    return stack;
  }
}