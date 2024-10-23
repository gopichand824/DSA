class Stack {
  constructor() {
    this._items = []; 
  }
  push(item) {
    this._items.push(item); // add item to stack 
    return true;
  }
  pop() {
    return this._items.length > 0 ? this._items.pop() : "underflow"; // removes and returns the last item from the stack
  }
  peek() {
    return this._items[this._items.length - 1];
  }
  isEmpty() {
    return this._items.length === 0; // return true if stack is impty otherwise false
  }
  print() {
    this._items.length > 0
      ? console.log(this._items.join(" -> "))
      : console.log("Stack is empty"); 
    // console.log(this._items.join(' -> '));
  }
  size() {
    return this._items.length;
  }
  clear() {
    this._items = [];
  }
}

module.exports = Stack;

