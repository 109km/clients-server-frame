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
    last_signin_at: {
      type: DATE
    }
  });

  return User;
}