const route = require('express').Router();

const {getAllPosts, addPost, getSortedPosts, deletePost, updatePost, findPost} = require('./posts.controller');

route.get('/get_all_posts', getAllPosts);

route.post('/add_post', addPost);

route.get('/get_sorted_posts', getSortedPosts);

route.delete('/delete_post', deletePost);

route.put('/update_post', updatePost);

route.get('get_post', findPost);

module.exports = route;