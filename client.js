const serveBtn = document.getElementById('serveBtn');

serveBtn.addEventListener('click', async () => {
    // Send a DELETE request to the server's /serve endpoint
    const response = await fetch('/serve', { method: 'DELETE' });
    const data = await response.json();

    if (response.ok) {
        console.log(`Successfully served: Ticket #${data.ticket.ticketNumber}`);
        // We don't need to manually update the list here...
        // ...because our setInterval "Poller" will catch the change in 2 seconds!
    } else {
        alert(data.message); // Will say "No tickets to clear!" if empty
    }
});