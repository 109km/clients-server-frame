const db = require('../db');

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE
  } = app.Sequelize;

  const User = db.defineModel(app, 'users', {
    id: {
      type: INTEGER,
      autoIncrement: true,
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