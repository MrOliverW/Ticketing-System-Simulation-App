const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// --- Your Ticket Logic ---
class Ticket {
    constructor(number) {
        this.ticketNumber = number;
        this.timestamp = new Date();
    }
    toString() {
        return `Ticket #${this.ticketNumber} - Issued at: ${this.timestamp.toLocaleTimeString()}`;
    }
}

const ticketQueue = [];
let nextTicketNumber = 1;

// --- Routes ---

// Root route to check if server is alive
app.get('/', (req, res) => {
    res.send('Ticketing System API is running!');
});

// GET: View the current queue
app.get('/queue', (req, res) => {
    res.json({
        count: ticketQueue.length,
        tickets: ticketQueue
    });
});

// POST: Issue a new ticket (Customer arrives)
app.post('/ticket', (req, res) => {
    const newTicket = new Ticket(nextTicketNumber++);
    ticketQueue.push(newTicket);
    console.log(`[Arrival] ${newTicket.toString()}`);
    
    res.status(201).json({
        message: "Ticket issued",
        ticket: newTicket
    });
});

// DELETE: Serve the next customer (Dequeue)
app.delete('/serve', (req, res) => {
    if (ticketQueue.length > 0) {
        const serving = ticketQueue.shift();
        res.json({ message: "Serving customer", ticket: serving });
    } else {
        res.status(404).json({ message: "Queue is empty" });
    }
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`--- Ticketing Server Running ---`);
    console.log(`URL: http://localhost:${PORT}`);
});