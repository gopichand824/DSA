class Queue {
  constructor() {
    this.items = [];
    }

  enqueue(element) {
    this.items.push(element);
    }
  dequeue() {
    return this.items.shift();
    }
  front() {
    return this.items[0];
    }
  size() {
    return this.items.length;
    }
  isEmpty() {
    return this.items.length === 0;
    }
  print() {
    console.log(this.items.toString());
    }
}


//test the function
let queue = new Queue();

queue.enqueue("task1");
queue.enqueue("task2");
queue.enqueue("task3");

while(!queue.isEmpty()) {
  console.log(queue.dequeue());
}