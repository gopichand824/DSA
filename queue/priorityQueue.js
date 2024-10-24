class PriorityQueue {
    constructor(){
        this.items = [];
    }
    #QueueElement(element, priority){
        let qe = {
            element,
            priority
        }
        return qe;
    }
    enqueue(element, priority){
        let queueElement = this.#QueueElement(element, priority);

        let added = false;
        for(let i = 0; i<this.items.length; i++) {
            if(this.items[i].priority < queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if(!added) {
            this.items.push(queueElement);
        }
    }

    deque(){
        return this.items.shift();
    }

    front(){
        return this.item[0];
    }

    size() {
        return this.item.length;
    }

    print() {
        console.log(this.items)
        // for(let index in this.items) {
        //     console.log(this.items[index].element);
        // }
    }
}

let queue = new PriorityQueue();

queue.enqueue("task1", 0);
queue.enqueue("task2", 2);
queue.enqueue("task3", 1);

queue.print();