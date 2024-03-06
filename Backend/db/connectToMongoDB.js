import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("connected to mongoDB");
    }
    catch (error) {
        console.log("Error connecting to MongoDb", error.message);
    }
};

export default connectToMongoDB;