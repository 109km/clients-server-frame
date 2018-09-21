const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT,
    STRING,
    BOOLEAN
  } = app.Sequelize;

  const Dream = db.defineModel(app, 'dreams', {
    userId: {
      type: INTEGER,
      unique: true,
      allowNull: false
    },
    dreamId: {
      type: INTEGER,
      unique: true,
      allowNull: false
    },
    title: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: TEXT,
      allowNull: false
    },
    isMemberOnly: {
      type: BOOLEAN
    },
    pics: {
      type: TEXT
    }
  });

  return Dream;
}