function LinkedList() {
    this.head = null;
    this.tail = null;
}

// create each node; - A node will have a prev , next and also value prop in it - doubly linked list

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {

    var newNode = new Node(value, this.head, null) // meaning - this is going to be head, so definitely no prev(hence prev = null) and current head is going to be next of this (hence this.head is passed for next params).

    if(this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }

    this.head = newNode;

    // if you assign the head to new object - obv, prev head pointer will be removed coz head can be only at one position.
}
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.head)

    if(this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
    if(!this.head) {
        return null // coz no head;
    }

    var nodeToRemove = this.head;

    if(this.head.next) {
        this.head.prev = null;
        this.head = this.head.next;
    } else {
        this.head = null;
        this.tail = null;
    }
    
    return nodeToRemove;
    
}
LinkedList.prototype.removeTail = function() {
    if(!this.tail) {
        return null // coz no tail;
    }
    var nodeToRemove = this.tail;
    this.tail = this.tail.prev;
    if(this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }

    return nodeToRemove;
}

LinkedList.prototype.search = function(searchValue) {
    // check each node - so iterate.
    let currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === searchValue) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
    
}

LinkedList.prototype.indexOf = function(value) {
    var indexes = []
    var currentIndex = 0;
    let currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === searchValue) {
            indexes.push(currentIndex);
        }
        currentIndex++;
        currentNode = currentNode.next;
    }
    return null;
}

var list = newLinkedList();