let socket;

// Function to connect to the Raspberry Pi Pico W via WebSocket
function connectWebSocket() {
    socket = new WebSocket('ws:192.168.6.126:80');  // Replace with the actual IP of your Pico W

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

// Function to turn the LED on
function turnLEDOn() {
    console.log("Turning LED On");
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send('LED_ON');  // Send command to Pico W to turn LED on
    }
}

// Function to turn the LED off
function turnLEDOff() {
    console.log("Turning LED Off");
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send('LED_OFF');  // Send command to Pico W to turn LED off
    }
}
