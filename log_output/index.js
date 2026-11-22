
const { randomUUID } = require('crypto');

// Generate a random UUID once when the application starts
const randomString = randomUUID();

// Print the UUID with a timestamp
function printRandomString() {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}

// Print immediately on startup
printRandomString();

// Repeat every 5 seconds
setInterval(printRandomString, 5000);
