const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3030 });

server.on('connection', ws => {
  ws.on('message', data => {
    server.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});