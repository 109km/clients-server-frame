const db = require('../db');

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE
  } = app.Sequelize;

  const User = db.defineModel(app, 'users', {
    username: {
      type: STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: STRING,
      allowNull: false
    },
    avatar_url: {
      type: STRING
    },
    nickname: {
      type: STRING
    },
    last_signin_at: {
      type: DATE
    }
  });


  User.associate = function() {
    app.model.User.hasMany(app.model.Dream);
    // app.model.User.hasMany(app.model.Post);
    app.model.User.hasMany(app.model.Comment, {
      foreignKey: 'user_id'
    });
  }

  return User;
}