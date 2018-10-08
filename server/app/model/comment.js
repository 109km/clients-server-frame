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
    commenter_id: {
      type: INTEGER,
      allowNull: false
    },
    commenter_name: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: TEXT,
      allowNull: false
    }
  });

  Comment.associate = function() {
    app.model.Comment.belongsTo(app.model.Post);
  }

  return Comment;
}