const db = require('../db');

module.exports = app => {
  const {
    STRING,
    INTEGER
  } = app.Sequelize;

  const Dream = db.defineModel(app, 'dreams', {
    id: {
      type: STRING,
      unique: true,
      primaryKey: true
    },
    userId: {
      type: INTEGER,
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

  return Dream;
}