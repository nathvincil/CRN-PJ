
let socket;

// WebSocket connection function
function connectWebSocket() {
    socket = new WebSocket('ws://192.168.6.126:80');  // Replace with your Pico W's IP

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
