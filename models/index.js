// Importing User, Post, and Comment models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Defining Sequelize associations between models

// User associations
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });

// Post associations
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });

// Comment associations
Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

// Exporting models
module.exports = { User, Comment, Post };