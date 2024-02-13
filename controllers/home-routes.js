// Import necessary modules and models
const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');

// Route to get all posts for the homepage
router.get('/', async (req, res) => {
  try {
    // Retrieve all posts and include user information for each post
    const postData = await Post.findAll({
      include: [User],
    });

    // Serialize the data for rendering
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'all-posts-admin' view with the retrieved posts
    res.render('allPostsAdmin', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    // Handle errors and send a 500 status code with a JSON response
    res.status(500).json(err);
  }
});

// Route to get a single post by ID
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    // Retrieve a single post by ID, including user and comment information
    const postData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      // Serialize the data for rendering
      const post = postData.get({ plain: true });

      // Render the 'single-post' view with the retrieved post
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } else {
      // Send a 404 status code if the post with the given ID is not found
      res.status(404).end();
    }
  } catch (err) {
    // Handle errors and send a 500 status code with a JSON response
    res.status(500).json(err);
  }
});

// Route to render the login page
router.get('/login', (req, res) => {
  // Redirect to the dashboard if the user is already logged in
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  // Render the 'login' view
  res.render('login');
});

// Route to render the signup page
router.get('/signup', (req, res) => {
  // Redirect to the dashboard if the user is already logged in
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  // Render the 'signup' view
  res.render('signup');
});

// Export the router
module.exports = router;
