// Import the Sequelize instance from the configuration file
const sequelize = require('../config/config');

// Import the function to seed user data
const seedUser = require('./userData');

// Import the function to seed post data
const seedPost = require('./postData');

// Define a function to seed both user and post data
const seedAll = async () => {
  // Synchronize the Sequelize models with the database, forcing recreation of tables
  await sequelize.sync({ force: true });

  // Seed user data using the defined function
  await seedUser();

  // Seed post data using the defined function
  await seedPost();

  // Exit the process to signify the completion of data seeding
  process.exit(0);
};

// Call the seedAll function to initiate the data seeding process
seedAll();
