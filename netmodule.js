const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  // When a client connects, log a message
  console.log('Client connected');

  // Send a message to the client
  socket.write('Hello from server!\r\n');

  // When the client sends data, log it
  socket.on('data', (data) => {
    console.log(`Received from client: ${data}`);

    // Echo the received data back to the client
    socket.write(`Server echoing: ${data}`);
  });

  // When the client disconnects, log a message
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start listening on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');

  // Create a new TCP socket
  const client = new net.Socket();

  // Connect to the server
  client.connect(8080, 'localhost', () => {
    console.log('Connected to server');

    // Send data to the server
    client.write('Hello from client!\r\n');
  });

  // Handle data received from the server
  client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
  });

  // Handle server connection closed
  client.on('close', () => {
    console.log('Connection to server closed');
  });
});
