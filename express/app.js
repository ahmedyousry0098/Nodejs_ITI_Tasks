const express = require('express');
const app = express();
const port = 5000;
const usersRoute = require('./modules/users/users.routes.js');
const postsRoute = require('./modules/posts/posts.routes.js');

app.use(express.json());

app.use(usersRoute);
app.use(postsRoute);

app.get('/home', (req, res) => {
    return res.json({message: 'Home Page!'})
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});