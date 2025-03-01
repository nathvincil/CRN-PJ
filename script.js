
let socket;

// Connect to the WebSocket server running on the Raspberry Pi Pico W
function connectWebSocket() {
    socket = new WebSocket('ws://192.168.6.126:80');  // Change this IP to your Pico W's IP
    
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

// Send message to turn LED on
function turnLEDOn() {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send('LED_ON');
    }
}

// Send message to turn LED off
function turnLEDOff() {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send('LED_OFF');
    }
}
