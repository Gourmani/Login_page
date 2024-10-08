
# User Authentication System

This is a simple user authentication system built with Node.js, Express.js, MongoDB, and EJS. The application allows users to sign up, log in, and view a home page after successful authentication. User passwords are securely stored using bcrypt hashing.

## Features

- **User Registration**: New users can sign up by providing a username and password.
- **User Login**: Registered users can log in with their credentials.
- **Password Security**: Passwords are hashed using bcrypt before being stored in the database, ensuring secure storage.
- **Home Page**: After logging in, users are redirected to a home page with dynamic content and animations.

## Project Structure

- `config.js`: Contains the MongoDB connection and the Mongoose schema for users.
- `index.js`: Main server file that handles routing, user registration, and login.
- `views/`: Contains the EJS templates for login, signup, and home pages.
- `public/style.css`: Contains the styling for the pages.
- `public/scripts.js`: Contains animations and additional dynamic behaviors for the pages.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (Online MongoDB service recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repositoryname.git
   cd repositoryname
