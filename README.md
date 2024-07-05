# Task Management Application

## Description
A simple task management application built with the MERN stack that allows users to create, read, update, and delete tasks.

## Features
- Add new tasks with a title, description, and due date.
- View a list of all tasks.
- View detailed information of each task.
- Edit existing tasks.
- Delete tasks.
- Responsive design for desktop and mobile devices.

## Technologies Used
- Front-end: React, Axios, React Router
- Back-end: Node.js, Express, MongoDB, Mongoose
- Version Control: Git

## Setup Instructions
1. Clone the repository:
    
    git clone <your-repo-url>
    cd task-manager-app
    

2. Set up the back-end:
    
    cd server
    npm install
    

3. Create a `.env` file in the `server` directory and add your MongoDB connection string:
    
    MONGO_URI=your_mongodb_connection_string
    

4. Start the back-end server:
    
    npm run server
    

5. Set up the front-end:
    
    cd ../client
    npm install
    npm start
    

## Usage
- Open your browser and go to `http://localhost:3000` to use the application.

## Deployment
- Optional: Deploy the application on a hosting platform (e.g., Heroku, Vercel, etc.)

