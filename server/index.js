const express = require ('express');
const socketio = require ('socket.io');
const http = require ('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server); //back-end socketio has many methods (io.on 'connection' & 'disconnect' should be used when clients are joining or leaving)

io.on('connection', (socket) => { //this will be connecting to client-side socket
  console.log('A new client connection is established!');

  socket.on('disconnect', () => {
    console.log('User disconnected!');
  })
  // socket.on('join', ({ name, room }, callback) => {
  //   console.log('User disconnected!')
  // })
});

app.use (router); //call router as app middleware


server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));