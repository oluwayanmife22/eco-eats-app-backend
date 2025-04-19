const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const itemRoutes = require('./src/routes/itemroutes'); 
const CategoryRoutes = require('./src/routes/categoryRoutes'); // Ensure this is the correct path

async function main() {
  try {
    await mongoose.connect('mongodb+srv://oluwayanmifeomotayo22:Kk6UlRqZqUZW6A6S@eco-eats-app.6qk31pr.mongodb.net/Eco-eats-app?retryWrites=true&w=majority&appName=Eco-eats-app');
    console.log("✅ MongoDB Connected Successfully");

    // Define routes **after** database connection is established
    app.use('/api', itemRoutes);
    app.use(`/api`, CategoryRoutes); // Ensure this is the correct path

    // Default route
    app.get('/', (req, res) => {
      res.send('Eco eats app server is running!');
    });

    // Start the server only after DB connection
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });

  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // Exit if database connection fails
  }
}

// Run the function to connect to DB and start the server
main();
