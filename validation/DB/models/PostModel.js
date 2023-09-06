import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {type: String},
    likes: [{type: mongoose.Types.ObjectId, ref: 'User'}],
    comments: [{
        content: String,
        createdBy: {type: mongoose.Types.ObjectId, ref: 'User'}
    }],
    createdBy: {type: mongoose.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;