const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT,
    STRING,
    DATE
  } = app.Sequelize;

  const Comment = db.defineModel(app, 'comments', {
    postId: {
      type: INTEGER,
      allowNull: false
    },
    userId: {
      type: INTEGER,
      allowNull: false
    },
    content: {
      type: TEXT,
      allowNull: false
    },
    commentAt: {
      type: DATE
    }
  });

  return Comment;
}