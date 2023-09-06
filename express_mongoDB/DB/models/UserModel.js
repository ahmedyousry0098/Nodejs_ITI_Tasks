import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    age: Number,
    password: String,
    posts: [
        {
            post: {type: mongoose.Types.ObjectId, ref: 'Post'}
        }
    ]
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;