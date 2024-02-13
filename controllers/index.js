// Import necessary modules and routes
const router = require('express').Router();
const apiRoutes = require('./api'); // Import API routes
const homeRoutes = require('./home-routes.js'); // Import home-related routes
const dashboardRoutes = require('./dashboard-routes.js'); // Import dashboard-related routes

// Use the home routes for the root path
router.use('/', homeRoutes);
// Use the dashboard routes for paths starting with '/dashboard'
router.use('/dashboard', dashboardRoutes);
// Use the API routes for paths starting with '/api'
router.use('/api', apiRoutes);

// Export the router
module.exports = router;
