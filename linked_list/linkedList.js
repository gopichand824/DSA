
class LinkedList {

    constructor() {
        this.length = 0;
        this.head   = null;
    }

    #newNode(element) {
        let node = {
                element: element,
                next: null
            }
        return node;
    }

    append(element) {                         //insert element at last node
        let current = null;
        let node = this.#newNode(element);

        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++
    }

    insert(position, element) {                   //insert element at specific position
        let node = this.#newNode(element), current = this.head, previous, index=0;

        if(position >= 0 && position <= this.length) {
            if(position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current  = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
        
    }

    removeAt(position) {
        if(position > -1 && position <= this.length) {
            let current = this.head, previous, index = 0;
            if(position === 0) {
                this.head = this.head.next
            } else {
                while(index++ < position) {
                    previous = current;
                    current  = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            current.element;
        } else {
            return null;
        }
    }

    indexOf(element) {
        let current = this.head, index = 0;
        while(current) {
            if(current.element === element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {

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

let list = new LinkedList();


for(let i = 0; i < 20; i++) {
    list.append(i);
}

// test the function
list.insert(0,343)           //insert at start 
list .insert(5,55);
list.insert(list.size(), 3344)     //insert at end
list.print();