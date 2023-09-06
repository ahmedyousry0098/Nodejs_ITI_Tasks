import UserModel from "../../DB/models/UserModel.js";
import bcrypt from 'bcryptjs';

export const signUp = async (req, res, next) => {
    const {name, email, password, age} = req.body;
    const existingUser = await UserModel.findOne({email});
    if (existingUser) {
        return res.status(409).json({message: 'User is already exist'})
    }
    const hashedPassword = bcrypt.hashSync(password, 8)
    const user = await UserModel.create({name, email, password: hashedPassword, age});
    return res.status(201).json({message: 'Done!', user})
};

export const signIn = async (req ,res, next) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email});
    if (!user) {
        return res.status(401).json({message: 'in-valid login credentials'})
    } 
    const isPasswordMatch = bcrypt.compareSync(password, user.password)
    return isPasswordMatch ? 
        res.json({message: 'logged In Successfully', user: {_id: user._id, email: user.email}}) 
        : res.json({message: 'in-valid login credentials'})
}

export const updateUser = async (req, res, next) => {
    const {_id} = req.body
    if (req.body.password) {
        let hashedPassword = bcrypt.hashSync(req.body.password, 8)
        req.body.password = hashedPassword
    }
    const user = await UserModel.findByIdAndUpdate(_id, req.body, {new: true}).select('-password')
    if (!user) {
        return res.status(404).json({message: 'User Not Found'})
    }
    return res.status(200).json({message: 'Updated Successfully!'})
};

export const deleteUser = async (req, res, next) => {
    const {email} = req.body;
    const deletedUser = await UserModel.findOneAndUpdate({email}, {new: true}).select("-password")
    if (!deletedUser) {
        return res.status(404).json({message: 'User Not Found'})
    }
    return res.status(200).json({message: 'deleted Successfully!', deletedUser})
}

export const getAllUsers = async (req, res) => {
    const users = await UserModel.find({}, {name: 1, age: 1, email: 1}).populate('posts')
    
    return res.status(200).json({message: 'All Users', users})
};

export const getSpecialUserNameAndAge = async (req, res, next) => {
    const {x, y} = req.params;
    const users = await UserModel.find({$or: [{age: {$lte: y}}, {name: {$regex: new RegExp(`/^${x}/`)}}]});
    if (users.length) {
        return res.status(200).json({message: 'users', users})
    }
    return res.status(404).json({message: 'Not Found'})
}

export const getUserNameEndsWith = async (req, res, next) => {
    const {x} = req.params;
    const users = await UserModel.find({name: {$regex: new RegExp(`/${x}$/`)}});
    if (users.length) {
        return res.status(200).json({message: 'Found', users})
    } else {
        return res.status(404).json({message: 'Not Found'})
    }
};

export const getUserNameContains = async (req, res, next) => {
    const {x} = req.params;
    const users = await UserModel.find({name: `/${x}/`});
    if (users.length) {
        return res.status(200).json({message: 'Found', users})
    } else {
        return res.status(404).json({message: 'Not Found'})
    }
}

export const findUserWithName = async (req, res) => {
    const {name} = req.body;
    const users = await UserModel.find({name});
    if (users.length) {
        return res.status(200).json({message: 'Found', users})
    } else {
        return res.status(404).json({message: 'Not Found'})
    }
};


export const deleteAllUsers = async (req, res, next) => {
    await UserModel.deleteMany();
    return res.status(200).json({message: 'All users have been deleted!'})
};

