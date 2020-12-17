function BST() {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    // check if value is less or greater
    if(value <= this.value) {
        if(!this.left) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } 

    if(value > this.value) {   
        if(this.right) {
            this.right.insert(value);
        } else {
            this.right = new BST(value);
        }
    }
}

BST.prototype.contains = function(value) {
    
    if(value == this.value) {
        return true;
    } else {
        if(value < this.value) {

            if(!this.left) return false;
            return this.left.contains(value);

        } else if(value > this.value) {

            if(!this.right) return false;
            return this.right.contains(value);
        }
    }
}
     
BST.prototype.depthFirstSearch = function(iteratorFunc) {
    if(this.left) {
        this.left.depthFirstSearch(iteratorFunc);
    }
    iteratorFunc(this.value);
    if(this.right) {
        this.right.depthFirstSearch(iteratorFunc);
    }
}

BST.prototype.depthFirstSearchPreOrder = function(iteratorFunc) {
    iteratorFunc(this.value);
    if(this.left) {
        this.left.depthFirstSearchPreOrder(iteratorFunc);
    }
    if(this.right) {
        this.right.depthFirstSearchPreOrder(iteratorFunc);
    }
}

BST.prototype.depthFirstSearchPostOrder = function(iteratorFunc) {
    if(this.left) {
        this.left.depthFirstSearchPreOrder(iteratorFunc);
    }
    if(this.right) {
        this.right.depthFirstSearchPreOrder(iteratorFunc);
    }
    iteratorFunc(this.value);
}

BST.prototype.breadthFirstSearch = function(iteratorFunc) {
    

    var queues = [this]; // this - node;

    while(queues) {
        var treeNode = queues.shift(); // returns the first value - parent or top level item in BST
        iteratorFunc(treeNode);

        if(treeNode.left) {
            queues.push(treeNode.left);
        }

        if(treeNode.right) {
            queues.push(treeNode.right);
        }
    }

}

BST.prototype.getMin = function() {
    if(this.left) {
        return this.left.getMin();
    } else {
        return this.value;
    }
}

BST.prototype.getMax = function() {
    if(this.right) {
        return this.left.getMax();
    } else {
        return this.value;
    }
}


function log(value) {
    console.log(value);
}

var tree = new BST(50);

tree.depthFirstSearch(iteratorFunc, 'in-order');
