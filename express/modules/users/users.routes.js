const route = require('express').Router();
const {getAllUsers, addUser, getSortedUsers, deleteUser, updateUser, findUser} = require('./users.contoller');

route.get('/get_all_users', getAllUsers);

route.post('/add_user', addUser);

route.get('/get_sorted_users', getSortedUsers);

route.delete('/delete_user', deleteUser);

route.put('/update_user', updateUser);

route.get('get_user', findUser);

module.exports = route;