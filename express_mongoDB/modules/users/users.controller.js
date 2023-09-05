import UserModel from "../../DB/models/UserModel.js";
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
    try {
        const {name, email, password, age} = req.body;
        const user = await UserModel.findOne({email});
        if (user) {
            return res.json({message: 'User is already exist'})
        } else {
            const hashedPassword = bcrypt.hashSync(password, 8)
            await UserModel.insertMany([{name, email, password: hashedPassword, age}]);
            return res.json({message: 'Done!'})
        }
    } catch(err) {
        res.json({message: 'Something went wrong!', err});
    };
};

export const signIn = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        console.log(user);
        if (user) {
            const matching = bcrypt.compareSync(password, user.password)
            return matching ? res.json({message: 'logged In Successfully'}) : res.json({message: 'Cannot sign in'})
        } else {
            return res.json({message: 'user not found'})
        }
    } catch (err) {
        return res.json({message: 'Something went wrong!', err});
    }
};

export const updateUser = async (req, res) => {
    try {
        const {_id, name, email, age, password} = req.body;
        await UserModel.findByIdAndUpdate(_id, {name, email, age, password}, (err, docs) => {
            if (err) {
                return res.json({message: 'Cannot Update User', err})
            } else {
                return res.json({message: 'Done !', docs})
            }
        })
    } catch (err) {
        res.json({message: 'Something went wrong!', err});
    }
};

export const deleteUser = async (req, res) => {
    try {
        const {email} = req.body;
        await UserModel.deleteOne({email}, (err, docs) => {
            if (err) {
                return res.json({message: 'Cannot delete user', err})
            } else {
                return res.json({message: 'User has been deleted!', docs})
            }
        });
    } catch (err) {
        return res.json({message: 'Something went wrong!', err});
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}, {name: 1, age: 1, email: 1});
        return res.json({message: 'All Users', users})
    } catch (err) {
        res.json({message: 'Something went wrong!', err});
    }
};

export const getSpecialUserNameAndAge = async (req, res) => {
    try {
        const {x, y} = req.params;
        const users = await UserModel.find({$or: [{age: {$lte: y}}, {name: `/^${x}`}]});
        if (users.length) {
            return res.json({message: 'Found', users})
        } else {
            return res.json({message: 'Not Found'})
        }
    } catch (err) {
        res.json({message: 'Something went wrong!', err});
    }
}

export const getUserNameEndsWith = async (req, res) => {
    try {
        const {x} = req.params;
        const users = await UserModel.find({name: `/${x}$/`});
        if (users.length) {
            return res.json({message: 'Found', users})
        } else {
            return res.json({message: 'Not Found'})
        }
    } catch (err) {
        res.json({message: 'All users have been deleted!'})
    }
};

export const getUserNameContains = async (req, res) => {
    try {
        const {x} = req.params;
        const users = await UserModel.find({name: `/${x}/`});
        if (users.length) {
            return res.json({message: 'Found', users})
        } else {
            return res.json({message: 'Not Found'})
        }
    } catch (err) {
        res.json({message: 'All users have been deleted!'})
    }
}

export const findUserWithName = async (req, res) => {
    try {
        const {name} = req.body;
        const users = await UserModel.find({name});
        if (users.length) {
            return res.json({message: 'Found', users})
        } else {
            return res.json({message: 'Not Found'})
        }
    } catch (err) {
        res.json({message: 'All users have been deleted!'});
    }
};


export const deleteAllUsers = async (req, res) => {
    try {
        await UserModel.deleteMany();
        res.json({message: 'All users have been deleted!'})
    } catch(err) {
        console.log(err);
    }
};

