const db = require('../db');

module.exports = app => {
  const {
    STRING,
    DATE
  } = app.Sequelize;

  const User = db.defineModel(app, 'dreams', {
    id: {
      type: STRING,
      unique: true,
      primaryKey: true
    },
    userId: {
      type: STRING,
      unique: true,
      allowNull: false
    },
    content: {
      type: STRING,
      allowNull: false
    },
    pics: {
      type: STRING
    }
  });

  return User;
}