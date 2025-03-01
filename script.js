
let socket;

// Simple UUID generator (no crypto API used)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// WebSocket connection function
function connectWebSocket() {
    socket = new WebSocket('ws://your_pico_w_ip:81');  // Replace with your Pico W's IP

    socket.onopen = () => {
        console.log('Connected to Raspberry Pi Pico W');
    };

    socket.onmessage = (event) => {
        console.log('Message from Pico W: ' + event.data);
    };

    socket.onerror = (error) => {
        console.log('WebSocket error: ' + error);
    };
}

// Function to turn LED on
function turnLEDOn() {
    console.log("Turning LED On");
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send('LED_ON');
    }
}

// Function to turn LED off
function turnLEDOff() {
    console.log("Turning LED Off");
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send('LED_OFF');
    }
}
