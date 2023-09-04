const http = require('http')
const {users} = require('./users.model.js')
const {posts} = require('./posts.model.js')

const server = http.createServer((req, res, next) => {

    // users api
    // - Add user
    if (req.url == "/users/add" && req.method == "POST") {
        req.on('data', function(chunk) {
            const user = JSON.parse(chunk)
            if (!user) {
                return res.end('No data Found')
            }
            users.push(user)
            res.end(JSON.stringify(users))
        })
    
    } 
    // - update post
    else if (req.url == '/users/update' && req.method == "PUT") {
        req.on('data', async function(chunk) {
            const parsedBody = await JSON.parse(chunk)
            if (!parsedBody?.id) {
                return res.end('please sent data')
            } 

            const updatedUsersList = users.map(user => {
                if (user.id == parsedBody.id) {
                    user = parsedBody
                }
                return user
            })

            return res.end(JSON.stringify(updatedUsersList))
        })  
    } 

    // - delete user
    else if (req.url == '/users/delete' && req.method == "DELETE") {
        req.on('data', async function(chunk) {
            const parsedBody = await JSON.parse(chunk)
            if (!parsedBody?.id) {
                return res.end('please sent id')
            } 

            const updatedUsersList = users.filter(user => user.id != parsedBody.id)

            return res.end(JSON.stringify(updatedUsersList))
        })
         
    } 
    // - Get all users sorted alphabetically by name
    else if (req.url == '/sorted-users' && req.method == "GET") {
        const sortedUsers = users.sort((a,b) => a.name < b.name? 1: -1)
        res.end(JSON.stringify(sortedUsers))
    } 
    // - Get user by id
    else if (req.url == '/user' && req.method == "GET") {
        req.on('data', function(chunk) {
            const parsedBody = JSON.parse(chunk)
            const user = users.find(user => user.id == parsedBody.id)
            if (!user) {
                return res.end('user not found')
            }
            return res.end(JSON.stringify(user))
        })
    }  
    // - Get all users
    else if (req.url == '/users' && req.method == "GET") {
        return res.end(JSON.stringify(users))
    }  


    // posts api
    // - Add post
    if (req.url == "/posts/add" && req.method == "POST") {
        req.on('data', function(chunk) {
            const post = JSON.parse(chunk)
            if (!post) {
                return res.end('No data Found')
            }
            users.push(post)
            return res.end(JSON.stringify(post))
        })
    
    } 
    // - update post
    else if (req.url == '/posts/update' && req.method == "PUT") {
        req.on('data', async function(chunk) {
            const parsedBody = await JSON.parse(chunk)
            if (!parsedBody?.id) {
                return res.end('please sent data')
            } 

            const updatedPostsList = posts.map(post => {
                if (post.id == parsedBody.id) {
                    post = parsedBody
                }
                return post
            })

            return res.end(JSON.stringify(updatedPostsList))
        })  
    } 

    // - delete post
    else if (req.url == '/posts/delete' && req.method == "DELETE") {
        req.on('data', async function(chunk) {
            const parsedBody = await JSON.parse(chunk)
            if (!parsedBody?.id) {
                return res.end('please sent id')
            } 

            const updatedPostsList = users.filter(post => post.id != parsedBody.id)

            return res.end(JSON.stringify(updatedPostsList))
        })
         
    } 
    // - Get all posts reversed
    else if (req.url == '/sorted-posts' && req.method == "GET") {
        const reversedPosts = posts.reverse()
        return res.end(JSON.stringify(reversedPosts))
    } 
    // - Get post 
    else if (req.url == '/post' && req.method == "GET") {
        req.on('data', function(chunk) {
            const parsedBody = JSON.parse(chunk)
            const post = posts.find(post => post.id == parsedBody.id)
            if (!post) {
                return res.end('post not found')
            }
            return res.end(JSON.stringify(post))
        })
    }   
    // - Get all posts
    else if (req.url == '/users' && req.method == "GET") {
        return res.end(JSON.stringify(posts))
    }  
})

server.listen(3000)