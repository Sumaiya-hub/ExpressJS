const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

// Step 1: Create a function to connect with MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/testDB');
    console.log('✅ DB is Connected');
  } catch (error) {
    console.log('❌ DB is not Connected');
    console.log(error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

// Step 2: Create a route
app.get('/', (req, res) => {
  res.send('Hello Everyone');
});

// Step 3: Connect DB first, then start the server
const startServer = async () => {
  await connectDB(); // Wait for DB to connect first

  app.listen(PORT, () => {
    console.log(`🚀 Server is Running at http://localhost:${PORT}`);
  });
};

startServer(); // Call the async function
