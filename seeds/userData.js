// Import the User model from the models directory
const { User } = require('../models');

// User data to be inserted into the User table
const userdata = [
  {
    "username": "Can",
    "password": "password"
  },
  {
    "username": "Ali",
    "password": "password"
  },
  {
    "username": "Bono",
    "password": "password"
  }
];

// Function to seed the User table with the provided data
const seedUser = () => User.bulkCreate(userdata, {
  // Enable individual hooks for each user creation
  individualHooks: true,
  // Ensure the created user data is returned as an array
  returning: true,
});

// Export the seedUser function for use in other modules
module.exports = seedUser;
