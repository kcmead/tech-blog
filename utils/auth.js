// Middleware for Route Authorization
const withAuth = (req, res, next) => {
    // Check if the user is not logged in
    if (!req.session.loggedIn) {
      // Redirect the user to the login page if not logged in
      res.redirect('/login');
    } else {
      // If the user is logged in, execute the route function
      // This middleware allows authenticated users to access the protected route
      // Call next() to proceed to the next middleware or route handler
      next();
    }
  };
  
  // Export the withAuth middleware for use in other parts of the application
  module.exports = withAuth;