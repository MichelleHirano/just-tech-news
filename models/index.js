const User = require('./User');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

module.exports = { User };