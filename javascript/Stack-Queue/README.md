# Stack - Queue 

Stack and Queue are a Data structure that are used to solve a certain types of problems, you make a class for each one for their methods and you create them using Nodes


# Challenge

Make a test to check if your stack and queue is working

# API

**For Stack**
- Push : add an element
- pop : removes the last added element

**For Queue**
- enqueue : to add an element 
- dequeue : to remove the first element
- 
# Tests

└─ $~ npm run test stack-queue

> data-structures-and-algorithms@1.0.0 test
> jest --verbose --coverage "stack-queue"

PASS Stack-Queue/**test**/stack-queue.test.js
Stack and Queue test
✓ Can successfully push onto a stack (2 ms)
✓ Can successfully push multiple values onto a stack (1 ms)
✓ Can successfully pop off the stack
✓ Can successfully empty a stack after multiple pops (1 ms)
✓ Can successfully peek the next item on the stack (1 ms)
✓ Can successfully instantiate an empty stack
✓ Calling pop or peek on empty stack raises exception
✓ Can successfully enqueue into a queue (1 ms)
✓ Can successfully enqueue multiple values into a queueCan successfully enqueue multiple values into a queue
✓ Can successfully dequeue out of a queue the expected value
✓ Can successfully peek into a queue, seeing the expected value
✓ Can successfully empty a queue after multiple dequeues (1 ms)
✓ Can successfully instantiate an empty queue
✓ Calling dequeue or peek on empty queue raises exception

# Big O

#### O(1)
