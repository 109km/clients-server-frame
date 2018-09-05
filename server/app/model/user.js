const db = require('../db');

module.exports = app => {
  const {
    STRING,
    DATE
  } = app.Sequelize;

  const User = db.defineModel(app, 'users', {
    id: {
      type: STRING,
      unique: true,
      primaryKey: true
    },
    username: {
      type: STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: STRING,
      allowNull: false
    },
    lastSignInAt: DATE
  });

  return User;
}