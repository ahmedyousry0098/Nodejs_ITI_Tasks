import ProductModel from '../../DB/models/ProductModel.js';
import UserModel from '../../DB/models/UserModel.js';

export const addProduct = async (req, res) => {
    try {
        const {title, description, price, createdByEmail} = req.body;
        const user = await UserModel.findOne({email: createdByEmail});
        // console.log(user);
        if (user) {
            await ProductModel.insertMany([{title, description, price, createdBy: createdByEmail}]);
            return res.json({message: 'Done!'})
        } else {
            return res.json({message: 'Sorry You Must Sign Up To Add Product',})
        }
    } catch (err) {
        res.json({message: 'Some Thing Went Wrong!', err});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {_id, title, description, price, createdByEmail} = req.body;
        const userEmail = await UserModel.findOne({email: createdByEmail}, {email: 1});
        if (userEmail === createdByEmail) {
            await ProductModel.updateOne({_id}, {$set: {title, description, price}});
            return res.json({message: 'Done!'})
        } else {
            return res.json({message: 'Sorry Product Must Be Updated By Same User'})
        }
    } catch (err) {
        res.json({message: 'Some Thing Went Wrong!', err})
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const {_id, createdByEmail} = req.body;
        const userEmail = await UserModel.findOne({email: createdByEmail}, {email: 1});
        if (userEmail === createdByEmail) {
            await ProductModel.deleteOne(_id);
            return res.json({message: 'Done!'})
        } else {
            return res.json({message: 'Sorry Product Must Be Deleted By Same User'})
        }
    } catch (err) {
        res.json({message: 'Some Thing Went Wrong!', err})
    }
};

export const getProductById = async (req, res) => {
    try {
        const {_id} = req.params;
        const product = await ProductModel.findOne({_id});
        return res.json({message: "Found", product})
    } catch (err) {
        res.json({message: 'Some Thing Went Wrong!', err})
    }
}
