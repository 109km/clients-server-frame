const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT
  } = app.Sequelize;

  const Dream = db.defineModel(app, 'dreams', {
    userId: {
      type: INTEGER,
      unique: true,
      allowNull: false
    },
    content: {
      type: TEXT
    },
    pics: {
      type: TEXT
    }
  });

  return Dream;
}