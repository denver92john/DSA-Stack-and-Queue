const _Node = require('./node');

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
        } else {
            const node = new _Node(data, this.top);
            this.top = node;
        }
        this.size++;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        this.size--;
        return node.data;
    }

    size_of_stack() {
        console.log(this.size);
    }
}

Stack.prototype.peek = function() {
	return this.top.data;
}

Stack.prototype.isEmpty = function() {
	return (!this.top ? 'empty' : 'not empty');
}

Stack.prototype.display = function() {
	let currNode = this.top;
	let str = "";
	while(currNode) {
		str += currNode.data + " ";
		currNode = currNode.next;
	}
	console.log(str)
}

module.exports = Stack;