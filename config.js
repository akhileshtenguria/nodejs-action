import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log( "mongourl",process.env.MONGO_URL);
const MONGO_URL= process.env.MONGO_URL || "mongodb://localhost:27017/nodejsapp";

const mongodb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        if (conn) {
            console.log(`Mongodb connect successfully ${conn.connection.host}`);
        }else{
            console.log("error in mongodb connecction");
        }

    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit with failure

    }
}



export default mongodb;