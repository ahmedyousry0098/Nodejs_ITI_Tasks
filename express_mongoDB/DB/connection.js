import mongoose from "mongoose";

mongoose.set('strictQuery', true)

const DBConnection = async () => {
    return await mongoose.connect('mongodb://127.0.0.1/mongoDBassignment')
        .then(() => console.log('DB Connected >>'))
        .catch((err) => console.log(`error is ${err}`));
};

export default DBConnection;