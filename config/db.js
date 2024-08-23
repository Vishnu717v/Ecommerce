import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Server connected to MongoDB: ${conn.connection.host}`.green.bold);
    } catch (err) {
        console.error(`Error in MongoDB: ${err}`.bgRed.white);
    }
};

export default connectDB;
