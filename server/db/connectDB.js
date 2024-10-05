import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        if (conn.connection) {
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } else {
            console.log("Connection object is undefined.");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
