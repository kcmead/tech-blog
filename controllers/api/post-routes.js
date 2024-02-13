// Import necessary modules and models
const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
  // Extract post data from the request body
  const body = req.body;

  // Log the received post data for debugging purposes
  console.log(body);

  try {
    // Create a new post in the database with the logged-in user's ID
    const newPost = await Post.create({ ...body, userId: req.session.userId });

    // Log the newly created post for debugging purposes
    console.log("Here is the new post: ",  newPost);

    // Send a JSON response with the newly created post
    res.json(newPost);
  } catch (err) {
    // Log an error message if the creation fails and send a 500 status code
    console.log('Post creation failed!', err);
    res.status(500).json(err);
  }
});

// Update an existing post by ID
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Log the request body for debugging purposes
    console.log('Here is the req.body', req.body);

    // Update the post in the database with the provided data
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // Check the number of affected rows to determine success
    if (affectedRows > 0) {
      res.status(200).end(); // Send a 200 status code if successful
    } else {
      res.status(404).end(); // Send a 404 status code if the post with the given ID is not found
    }
  } catch (err) {
    // Send a 500 status code and JSON response in case of an error
    res.status(500).json(err);
  }
});

// Delete a post by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // Delete the post from the database by ID
    const [affectedRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Check the number of affected rows to determine success
    if (affectedRows > 0) {
      res.status(200).end(); // Send a 200 status code if successful
    } else {
      res.status(404).end(); // Send a 404 status code if the post with the given ID is not found
    }
  } catch (err) {
    // Send a 500 status code and JSON response in case of an error
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
