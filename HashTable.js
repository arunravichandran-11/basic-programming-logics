// 2 constructor funciton

function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function Node(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}


HashTable.prototype.Hash = function(key) {
    var total = 0;
    for(var i=0; i<key.length; i++) {
        total += key.charCodeAt(i);
    }
    var bucket = total/this.numBuckets;
    return bucket;
}

HashTable.prototype.insert = function(key, value) {
    var index = this.Hash(key);

    if(this.buckets[index]) {
        var currentNode = this.buckets[index];

        // happens for chaining.
        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(key, value);
    } else {
        this.buckets[index] = new Node(key, value);
    }
}

HashTable.prototype.update = function(key, value) {
    var index = this.hash(key);
    if(this.buckets[index]) {
      var currentNode = this.buckets[index];
      if(this.buckets[index].key === key) {
        this.buckets[index].value = value;
      } else {
        while(currentNode.next) {
          if(currentNode.next.key = key) {
            currentNode.next.value = value;
            return;
          }
          currentNode = currentNode.next;
        }
      }
    } else {
      this.buckets[index] = new Node(key, value);
    }
}


HashTable.prototype.get = function(key) {
    var index  = this.hash(key);

    if(!this.buckets[index]) {
        return null;
    } else {
        while(currentNode) {
            if(currentNode.key === key) {
                return currentNode || currentNode.value;
            }
            currentNode = currentNode.next;
        }

        return null;
    }
}
  
HashTable.prototype.retrieveAll = function() {
    var allBuckets = [];
    
    for(var i = 0; i<this.buckets.length; i++) {
      if(this.buckets[i]) {
        var currentNode = this.buckets[i];
        while(currentNode) {
          allBuckets.push(currentNode.value);
          currentNode = currentNode.next;
        }
      }
}


var HT = new HashTable(30);
