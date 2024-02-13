// Import necessary Sequelize components
const { Model, DataTypes } = require('sequelize');
// Import the configured Sequelize instance
const sequelize = require('../config/config');

// Define the Post model by extending the Sequelize Model class
class Post extends Model {}

// Initialize the Post model with the specified attributes and options
Post.init(
  {
    // Post ID, auto-incrementing primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Title of the post, limited to 25 characters, and must be unique
    postTitle: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    // Content of the post, must be unique
    postContent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Date when the post was created, defaults to the current date
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // User ID referencing the 'id' column in the 'user' model
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    // Sequelize instance to use for the model
    sequelize,
    // Disable timestamps (createdAt and updatedAt)
    timestamps: false,
    // Freeze the table name to the model name
    freezeTableName: true,
    // Use underscores instead of camelCase for column names
    underscored: true,
    // Model name in singular form
    modelName: 'post',
  }
);

// Export the Post model
module.exports = Post;
