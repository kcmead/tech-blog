// Import necessary modules and models
const router = require('express').Router();
const { User } = require('../../models');

// SIGN UP

// Handle POST request to create a new user account
router.post('/', async (req, res) => {
  try {
    // Create a new user with the provided username and password
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    // Save user information in the session and respond with the created user data
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    // Handle errors and respond with a 500 Internal Server Error status
    res.status(500).json(err);
  }
});

// LOGIN

// Handle POST request for user login
router.post('/login', async (req, res) => {
  try {
    // Find a user with the provided username
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If no user is found, respond with a 400 Bad Request status and a message
    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    // Check if the provided password is valid
    const validPassword = user.checkPassword(req.body.password);

    // If the password is not valid, respond with a 400 Bad Request status and a message
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    // Save user information in the session and respond with the user data and a success message
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    // Handle errors and respond with a 400 Bad Request status and a message
    res.status(400).json({ message: 'Error during login process!' });
  }
});

// LOGOUT

// Handle POST request to log out a user
router.post('/logout', (req, res) => {
  // If the user is logged in, destroy the session and respond with a 204 No Content status
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // If the user is not logged in, respond with a 404 Not Found status
    res.status(404).end();
  }
});

// Export the router for use in other files
module.exports = router;