const mongoose = require("mongoose");

// Replace the following URI with your MongoDB Atlas connection string
const uri = "mongodb+srv://raush6330:Gourmani%4012@cluster0.k4jvs.mongodb.net/Fitness?retryWrites=true&w=majority";

// Connect to MongoDB
const connect = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connect
    .then(() => {
        console.log("Connected to MongoDB...");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB...", error.message);
    });

// Create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Collection part
const collection = mongoose.model("users", LoginSchema);

module.exports = collection;
