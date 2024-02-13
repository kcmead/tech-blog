const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// Retrieve all posts for the dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    // Fetch all posts from the database for the authenticated user
    const postData = await Post.findAll({
      where: { "userId": req.session.userId },
      include: [User]
    });

    // Sanitize and map the fetched data
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'all-posts' view with the specified layout and data
    res.render('allPosts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    // Redirect to the login page in case of an error
    res.redirect('login');
  }
});

// Render the view for creating a new post
router.get('/new', withAuth, (req, res) => {
  // Render the 'new-post' view with the specified layout
  res.render('newPost', {
    layout: 'dashboard',
  });
});

// Render the view for editing a specific post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // Fetch the data of the specific post by its ID
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      // Serialize the data for rendering
      const post = postData.get({ plain: true });

      // Render the 'edit-post' view with the specified layout and data
      res.render('editPost', {
        layout: 'dashboard',
        post,
      });
    } else {
      // If the post with the given ID is not found, send a 404 response
      res.status(404).end();
    }
  } catch (err) {
    // Redirect to the login page in case of an error
    res.redirect('login');
  }
});

// Export the router
module.exports = router;
