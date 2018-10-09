const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT,
    STRING,
    DATE
  } = app.Sequelize;

  const Comment = db.defineModel(app, 'comments', {
    post_id: {
      type: INTEGER,
      allowNull: false
    },
    user_id: {
      type: INTEGER,
      allowNull: false
    },
    nickname: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: TEXT,
      allowNull: false
    }
  });

  Comment.associate = function() {
    app.model.Comment.belongsTo(app.model.Post, {
      foreignKey: 'post_id'
    });
    app.model.Comment.belongsTo(app.model.User, {
      foreignKey: 'user_id'
    });
  }

  return Comment;
}