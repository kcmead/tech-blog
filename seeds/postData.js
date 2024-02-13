// Import the Post model from the '../models' directory
const { Post } = require('../models');

// Seed data for posts with postTitle, postContent, and userId
const postdata = [
  {
    "postTitle": "Beautiful Day",
    "postContent": "This is a beautiful day",
    "userId": 1
  },
  {
    "postTitle": "Fields",
    "postContent": "This is the greenest field",
    "userId": 2
  },
  {
    "postTitle": "Do you hear it?",
    "postContent": "This is very musical, listen!",
    "userId": 3
  }
];

// Function to seed the Post model with the provided postdata
const seedPost = () => Post.bulkCreate(postdata);

// Export the seedPost function to be used elsewhere in the application
module.exports = seedPost;
