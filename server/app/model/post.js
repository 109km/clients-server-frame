const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT,
    STRING,
    BOOLEAN
  } = app.Sequelize;

  const Post = db.defineModel(app, 'posts', {
    dream_id: {
      type: INTEGER,
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
    is_member_only: {
      type: BOOLEAN
    },
    pics: {
      type: TEXT
    }
  });

  Post.associate = function() {
    app.model.Post.belongsTo(app.model.Dream);
    // app.model.Post.belongsTo(app.model.User);
    app.model.Post.hasMany(app.model.Comment);
  }

  return Post;
}