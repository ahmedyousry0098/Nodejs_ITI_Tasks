import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    createdBy: String
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;