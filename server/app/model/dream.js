const db = require('../db');

module.exports = app => {
  const {
    INTEGER,
    TEXT,
    STRING
  } = app.Sequelize;

  const Dream = db.defineModel(app, 'dreams', {
    user_id: {
      type: INTEGER,
      allowNull: false
    },
    title: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: TEXT
    },
    posts_list: {
      type: TEXT
    },
    goals_list: {
      type: TEXT
    },
    backers_list: {
      type: TEXT
    },
    tiers_list: {
      type: TEXT,
      field: 'tiers_list'
    }
  });

  Dream.associate = function() {
    app.model.Dream.belongsTo(app.model.User);
    app.model.Dream.hasMany(app.model.Post);
  }

  return Dream;
}