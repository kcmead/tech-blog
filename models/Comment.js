// Import necessary components from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize instance for database connection
const sequelize = require('../config/config');

// Define the Comment model by extending Sequelize's Model class
class Comment extends Model {}

// Initialize the Comment model with the specified attributes and options
Comment.init(
  {
    // Comment ID, auto-incrementing primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    // Content of the comment, stored as a string
    commentContent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure uniqueness of comment content
    },
    
    // Date when the comment was created
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Default to the current date and time
    },
    
    // User ID associated with the comment, referencing the 'user' model
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    
    // Post ID associated with the comment, referencing the 'post' model
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    // Sequelize instance for database connection
    sequelize,
    
    // Disable timestamps (createdAt, updatedAt columns)
    timestamps: false,
    
    // Ensure the table name matches the model name in lowercase and underscored
    freezeTableName: true,
    underscored: true,
    
    // Specify the model name in singular form
    modelName: 'comment',
  }
);

// Export the Comment model for use in other parts of the application
module.exports = Comment;
