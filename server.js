// Import required modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Import Sequelize and SequelizeStore for session management
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an Express application
const app = express();

// Set the port for the application, defaulting to 3001 if not provided
const PORT = process.env.PORT || 3001;

// Create an instance of Handlebars with custom helpers
const hbs = exphbs.create({ helpers });

// Configuration for session management
const sess = {
  secret: 'Tech blog secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Use session middleware with the specified configuration
app.use(session(sess));

// Configure Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the defined routes for the application
app.use(routes);

// Start the server, listen on the specified port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  
  // Sync Sequelize with the database, creating tables if not existent
  sequelize.sync({ force: false });
});