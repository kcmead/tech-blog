// Import necessary modules and create an Express router
const router = require('express').Router();

// Import user-related routes
const userRoutes = require('./user-routes.js');

// Import post-related routes
const postRoutes = require('./post-routes.js');

// Import comment-related routes
const commentRoutes = require('./comment-routes.js');

// Use the user routes under the '/user' endpoint
router.use('/user', userRoutes);

// Use the post routes under the '/post' endpoint
router.use('/post', postRoutes);

// Use the comment routes under the '/comment' endpoint
router.use('/comment', commentRoutes);

// Export the router
module.exports = router;