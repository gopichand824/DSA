
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  #newNode(element) {
    let node = {
      previous: null,
      element: element,
      next: null,
    };
    return node;
  }

  insert(position,element) {
    if(position >= 0 && position <= this.length) {
        let node = this.#newNode(element), current = this.head, previous, index = 0;
        
        if(position === 0) {                        //insert at first position
            if(!this.head) {                       //if list is empty
                this.head = node;
                this.tail = node;
            } else {                               //if list is not empty
            node.next = current;
            current.previous = node;
            this.head = node;
            }
        } else if(position === this.length) {      //insert at last position
            current = this.tail;
            current.next = node;
            node.previous = current;
            this.tail = node;
        } else {
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;

            current.previous = node;
            node.previous = previous;
        }
        this.length++;
        return true;
    } else {
        return false;
    }
  }

  removeAt(position) {
    if(position > -1 && position < this.length) {
        let current = this.head, previous, index = 0;

        if(position === 0) {
            this.head = current.next
            //if there is only one item 
            if(this.length === 1) {
                this.tail = null;
            } else {
                this.head.previous = null;
            }
        } else if(position === this.length-1) {
            current = this.tail;
            this.tail = current.previous;
            this.tail.next = null;
        } else {
            while(index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            current.next.previous = previous;
        }
        this.length--;
        return current.element;
    } else {
        return null;
    }
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    let current = this.head;
    let str = '';
    while(current){
        str += current.element + " ";
        current = current.next;
    }
    console.log(str);
}
}

let list = new DoublyLinkedList();

for (let i = 0; i < 10; i++) {
  list.insert(i, i);
}
list.removeAt(3);
list.print();
