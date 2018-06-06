# Implement a Queue Using two Stacks

## Challenge
Implement the following methods for the Queue class:

enqueue(value) which inserts value into the Queue using a first-in, first-out approach.
dequeue() which extracts a value from the Queue using a first-in, first-out approach.
You have access to 2 Stack instances with push and pop methods.

Example
enqueue(value)
Input	            Args	      Output
[10]->[15]->[20]	5	         [5]->[10]->[15]->[20]
 	5	[5]

dequeue()
Input	                 Output	  Internal State
[5]->[10]->[15]->[20]	 20	      [5]->[10]->[15])
[5]->[10]->[15]	       15	      [5]->[10]

  ## Solution
  ![whiteboard image](queue_with_stacks.jpg)

  ## Credits
  Consulted geeks for geeks https://www.geeksforgeeks.org/queue-using-stacks/

  As well as the whiteboard demonstration done during lecture (by Justin).