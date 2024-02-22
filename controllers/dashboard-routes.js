const express = require('express');
const router = express.Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// Retrieve all posts for the dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('allPosts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// Render the view for creating a new post
router.get('/new', withAuth, (req, res) => {
  res.render('newPost', {
    layout: 'dashboard',
  });
});

// Render the view for editing a specific post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('editPost', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;