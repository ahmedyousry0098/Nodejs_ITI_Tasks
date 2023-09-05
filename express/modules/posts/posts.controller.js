let posts = [
    {id: 1, title: 'Hello World!'},
    {id: 2, title: 'New Post'},
];

const getAllPosts = (req, res) => {
    return res.json({posts})
};

const addPost = (req, res) => {
    const {id, title} = req.body;
    const post = posts.find(post => post.id === id);

    if (post) {
        return res.json({message: 'Post already exist!'})
    } else {
        posts.push({id, title});
        return res.json({message: 'Done!'})
    }
};

const getSortedPosts = (req, res) => {
    const sortedPosts = [...posts].reverse();
    return res.json({sortedPosts})
}

const deletePost = (req, res) => {
    const {id} = req.body;
    const updatedPosts = posts.filter(u => u.id !== id);
    return res.json({message: 'Done!', updatedPosts})
};

const updatePost = (req, res) => {
    const {id, title} = req.body;
    const updatedPost = posts.map(post => {
        return post.id === id ? {id, title} : post;
    });
    return res.json({message: 'Done!', updatedPost});
};

const findPost = (req, res) => {
    const {id} = req.body;
    const post = posts.find(post => post.id === id);
    if (post) {
        return res.json({message: "Post Found", post});
    } else {
        return res.json({message: "Post Not Exist!"});
    }
}

module.exports = {getAllPosts, addPost, getSortedPosts, deletePost, updatePost, findPost}