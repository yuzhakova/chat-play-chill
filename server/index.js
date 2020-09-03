const express = require ('express');
const socketio = require ('socket.io');
const http = require ('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server); //back-end socketio has many methods (io.on 'connection' & 'disconnect' should be used when clients are joining or leaving)

io.on('connection', (socket) => { //this will be connecting to client-side socket
  socket.on('join', ({ name, room }) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if(error) return callback(error); //if there is an error, we exit the function with return statement
    
    //admin generated messages
    //emit from the backend to the front-end
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the Chess Room ${user.room}` });
    //method to send message to everyone except that user
    socket.broadcast.to(user.room).emit(`message`, { user: 'admin', text: `${user.name} has joined.`});

    socket.join(user.room);

    callback();
  });

  //user generated messages
  //expect the event (back-end expects event from the front-end, the emitting part is on the front-end)
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { uer: user.name, text: message});

    callback();
  });

  socket.on('disconnect', () => {
    console.log('User disconnected!');
  })
});

app.use (router); //call router as app middleware


server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));