//helper functions to manage users => used to manage users on specific sockets in index.js file
const users = [];

const addUser = ({ id, name, room }) => {
  //all lower case all one word no spaces
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //check if user name is taken in the same room
  const existingUser = users.find((user) => user.room === room && user.name === name);
  
  if(!name || !room) return { error: 'Name and Room cannot be blank.' };
  if(existingUser) {return { error: 'Username is taken'}};
  
  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0]
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };