Ticketing System Simulation

A queue system for a service center where customers take a number and wait for their turn using JS.

Ticket class contains ticket data.
Queue is time based, FIFO.
Tickets are generated at random intervals so that all tickets generate in 1 phase and the process in the next.

Ussed an array to story ticket objects called ticketQueue.
The function customerArrives simulates a customer arriving.
Created a for loop to generate them.

using .shift method to remove the ticket at the front of the array when it's called.

Time and Space Complexity:
space: O(n) - linear space because the size increases proprotionately to the size of the array

time:
enqueueing O(1)

dequeueing O(n)

