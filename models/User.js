// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');

// Define the User model, extending the Sequelize Model class
class User extends Model {
  // Method to check if the provided password matches the stored hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initialize the User model with defined attributes and configurations
User.init(
  {
    // User ID attribute
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Username attribute
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Password attribute
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  // Model options and configurations, including hooks for password hashing
  {
    hooks: {
      // Before creating a new user, hash their password
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Before updating a user, hash their updated password
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize, // Link to the Sequelize connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Use singular table name
    underscored: true, // Use underscored naming convention
    modelName: 'user', // Model name in the database
  }
);

// Export the User model
module.exports = User;
