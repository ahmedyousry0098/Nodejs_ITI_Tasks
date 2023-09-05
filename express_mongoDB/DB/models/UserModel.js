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
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;