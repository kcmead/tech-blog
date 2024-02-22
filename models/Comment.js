// Import necessary components from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize instance for database connection
const sequelize = require('../config/config');

// Define the Comment model by extending Sequelize's Model class
class Comment extends Model {}

// Initialize the Comment model with the specified attributes and options
Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  commentContent: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure uniqueness of comment content
  },
  dateCreated: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Default to the current date and time
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id',
    },
  },
}, {
  sequelize, // Sequelize instance for database connection
  timestamps: false, // Disable timestamps (createdAt, updatedAt columns)
  freezeTableName: true, // Ensure the table name matches the model name in lowercase and underscored
  underscored: true,
  modelName: 'comment', // Specify the model name in singular form
});

// Export the Comment model for use in other parts of the application
module.exports = Comment;