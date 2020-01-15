// 1. Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
const Stack = require('./stack/stack');
const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');


// 2. Using Stack class above, implement helper function outside of class: peek(), isEmpty(), and display(). Also remove McCoy from stack and display the stack
starTrek.peek();
starTrek.isEmpty();
starTrek.display();

starTrek.pop();
starTrek.pop();
starTrek.display();