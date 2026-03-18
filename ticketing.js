// ticketing.js

class Ticket {
    constructor(number) { //constructor function to initialize a new ticket with a number and timestamp
        this.ticketNumber = number; //Issues a ticket number for each new ticket
        this.timestamp = new Date(); //Captures current date and time
    }

    toString() {
        // Makes it spiffy (easier to read)
        return `Ticket #${this.ticketNumber} - Issued at: ${this.timestamp.toLocaleTimeString()}`; 
    }
}

const ticketQueue = []; //creates an array called ticketQueue to hold the tickets in the order they were issued
let nextTicketNumber = 1; //A variable to keep track of the next ticket number to be issued, starting at 1
//using let allows us to update the value of nextTicketNumber as new tickets are issued

// --- Simulation logic ---

function customerArrives() {
    const newTicket = new Ticket(nextTicketNumber++);
    ticketQueue.push(newTicket); //.push is used to add newTicket to the end of the ticketQueue array
    
    // Using your .toString() method here to show off the "spiffy" formatting
    console.log(`[Arrival] ${newTicket.toString()} | Total waiting: ${ticketQueue.length}`);
}

// Function to serve customers (as requested in the previous step)
function serveCustomer() {
    if (ticketQueue.length > 0) {
        const serving = ticketQueue.shift(); // .shift() removes the FIRST item in the array
        console.log(`[Service] Now serving Ticket #${serving.ticketNumber}.`);
    } else {
        console.log("[Service] No customers in line.");
    }
}

console.log("--- Ticketing System Simulation ---");

// Initial arrivals
for (let i = 0; i < 5; i++) {
    customerArrives();
}

// Serve a couple to show the queue decreasing
console.log("\n--- Processing the Line ---");
serveCustomer();
serveCustomer();

console.log(`Remaining in queue: ${ticketQueue.length}`);