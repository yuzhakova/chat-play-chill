const express = require ('express');
const socketio = require ('socket.io');
const http = require ('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server); //back-end socketio has many methods

app.use(router);
app.use(cors());

io.on('connect', (socket) => { //this will be connecting to client-side socket
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if(error) return callback(error); //if there is an error, we exit the function with return statement
    socket.join(user.room);

    //admin generated messages
    //emit from the backend to the front-end
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the Chat Room ${user.room}` });
    //method to send message to everyone except that user
    socket.broadcast.to(user.room).emit(`message`, { user: 'admin', text: `${user.name} has joined.`});
    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  })

  //user generated messages
  //expect the event (back-end expects event from the front-end, the emitting part is on the front-end)
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  //this callback will be run after an event is emmited
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.`});
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});


server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));