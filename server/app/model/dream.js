const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT,
    STRING
  } = app.Sequelize;

  const Dream = db.defineModel(app, 'dreams', {
    userId: {
      type: INTEGER,
      unique: true,
      allowNull: false
    },
    title: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: TEXT
    },
    postsList: {
      type: TEXT
    },
    goalsList: {
      type: TEXT
    },
    backersList: {
      type: TEXT
    },
    tiersList: {
      type: TEXT
    }
  });

  return Dream;
}