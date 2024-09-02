const express = require('express');
const path = require("path"); 
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.post("/signup", async (req, res) => {
    try {
        const data = {
            name: req.body.username,
            password: req.body.password
        };

        // Check if the user already exists
        const existingUser = await collection.findOne({ name: data.name });

        if (existingUser) {
            console.log("User already exists:", existingUser); // Debugging output
            return res.send("User already exists. Please choose a different username.");
        }

        // Hash the password using bcrypt
        const saltrounds = 10;
        const hashedpassword = await bcrypt.hash(data.password, saltrounds);
        data.password = hashedpassword; // Replace the original password with the hashed one

        // Insert the new user data into the database
        const userdata = await collection.insertMany([data]);

        console.log("New user registered:", userdata);

        // Redirect to the login page or send a success response
        res.redirect('/');
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("Error during signup");
    }
});

// Login user
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            return res.send("Username not found");
        }

        // Compare the hashed password with the plain text password from the request
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            res.render("home");  // Render the home page if the password matches
        } else {
            res.send("Password is incorrect");
        }
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).send("Bad Credentials");
    }
});



const port = 5000;

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
