// Importing User, Post, and Comment models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Defining associations between models using Sequelize associations

// A User can have many Posts with a foreign key 'userId', and posts will be deleted if the corresponding user is deleted
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// A User can have many Comments with a foreign key 'userId', and comments will be deleted if the corresponding user is deleted
User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// A Post belongs to a User with a foreign key 'userId', and the post will be deleted if the corresponding user is deleted
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// A Post can have many Comments with a foreign key 'postId', and comments will be deleted if the corresponding post is deleted
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// A Comment belongs to a User with a foreign key 'userId'
Comment.belongsTo(User, {
  foreignKey: 'userId',
});

// A Comment belongs to a Post with a foreign key 'postId'
Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

// Exporting User, Comment, and Post models
module.exports = {
  User,
  Comment,
  Post
};
