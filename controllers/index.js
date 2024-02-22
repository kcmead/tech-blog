const express = require('express');
const router = express.Router();

// Import routes
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api');

// Define route prefixes
const homePrefix = '/';
const dashboardPrefix = '/dashboard';
const apiPrefix = '/api';

// Use routes
router.use(homePrefix, homeRoutes);
router.use(dashboardPrefix, dashboardRoutes);
router.use(apiPrefix, apiRoutes);

// Export the router
module.exports = router;