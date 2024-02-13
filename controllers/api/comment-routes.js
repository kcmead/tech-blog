// Import necessary modules and models
const router = require('express').Router();
const { Comment, User } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get all comments with user information
router.get('/', withAuth, async (req, res) => {
  try {
    // Retrieve all comments from the database, including associated user information
    const commentData = await Comment.findAll({
      include: [User],
    });

    // Serialize the data to plain JavaScript objects
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    // Log the retrieved comments for debugging purposes
    console.log(comments);
    
    // Render the 'single-post' template with comments and loggedIn status
    res.render('single-post', { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    // Send a 500 status code and JSON response in case of an error
    res.status(500).json(err);
  }
});

// Create a new comment
router.post('/', withAuth, async (req, res) => {
  // Extract comment data from the request body
  const body = req.body;

  try {
    // Create a new comment in the database with the logged-in user's ID
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });

    // Send a JSON response with the newly created comment
    res.json(newComment);
  } catch (err) {
    // Send a 500 status code and JSON response in case of an error
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
