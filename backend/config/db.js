const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/home_decor_DB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('MongoDB Connection Error:', err);
      process.exit(1); // Exit process on failure
    }
  };

// module.exports = mongoose.connection;
module.exports = connectDB;