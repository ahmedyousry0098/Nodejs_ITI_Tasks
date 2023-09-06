import PostModel from '../../DB/models/PostModel.js';
import UserModel from '../../DB/models/UserModel.js';

export const addPost = async (req, res, next) => {
    const {title, description, price, createdBy} = req.body;
    const user = await UserModel.findById(createdBy);
    if (!user) {
        return res.status(401).json({message: 'Sorry You Must Sign Up To Add Product'})
    }
    const post = await PostModel.create({title, description, price, createdBy});
    await UserModel.updateOne({_id: createdBy}, {$push: {posts: {post: post._id}}})
    return res.status(201).json({message: 'Done!', post})
}

export const updatePost = async (req, res, next) => {
    const {_id, title, description, price, createdByEmail} = req.body;
    const userEmail = await UserModel.findOne({email: createdByEmail}, {email: 1});
    if (userEmail != createdByEmail) {
        return res.status(401).json({message: 'Sorry Post Must Be Updated By Same User'})
    } 
    const post = await PostModel.updateOne({_id}, {$set: {title, description, price}});
    return res.json({message: 'Done!', post})
};

export const deletePost = async (req, res, next) => {
    const {_id, createdByEmail} = req.body;
    const userEmail = await UserModel.findOne({email: createdByEmail}, {email: 1});
    if (userEmail != createdByEmail) {
        return res.status(401).json({message: 'Sorry Post Must Be Deleted By Same User'})
    } 
    const deletedPost = await PostModel.deleteOne(_id, {new: true});
    return res.status(200).json({message: 'Done!', deletedPost})
};

export const getPostById = async (req, res, next) => {
    const {_id} = req.params;
    const product = await PostModel.findOne({_id});
    if (!post) {
        return res.status(404).json({message: 'Post Not Found'})
    }
    return res.status(200).json({message: "Found", product})
}

export const getAllPosts = async (req, res, next) => {
    const posts = await PostModel.find().populate({path: "createdBy", select: "name email"})
    if (!posts.length) {
        return res.status(200).json({message: 'No Posts Found'})
    }
    return res.status(200).json({message: "Done!", posts})
}

export const sortedPostsByDate = async(req, res, next) => {
    const posts = await PostModel.find().sort({createdAt: -1})
    if (!posts) {
        return res.status(200).json({message: 'Posts not found'})
    }
    return posts
}