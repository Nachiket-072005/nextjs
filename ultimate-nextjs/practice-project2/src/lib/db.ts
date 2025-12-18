import { connect } from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;
if (!mongodbUrl) {
    throw new Error("MONGODB_URL is not defined");
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
    if (cached.conn) {
        console.log("Using existing database connection");
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = connect(mongodbUrl).then((c) => c.connection);
    }

    try {
        cached.conn = await cached.promise;
        console.log("New database connection established");
    } catch (error) {
        throw error;
    }

    return cached.conn;
}

export default connectDb;