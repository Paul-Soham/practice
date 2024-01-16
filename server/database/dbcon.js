import mongoose from "mongoose";
const connectDb = async () => {
    const URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(URI);
        console.log("Database connection successful");
    }
    catch {
        console.error("Database connection failed");
        process.exit(0);
    }
}
export default connectDb;