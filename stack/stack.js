class Stack {
  constructor() {
    this._items = []; // _ is private, so it can be accessed only inside the class itself and not outside of that class (i.e., in other files)
  }
  push(item) {
    this._items.push(item); // add item to stack (adds it at end, so the last element is added first and then removed from array when popped out of that position.)
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

