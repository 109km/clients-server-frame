const db = require('../db');

module.exports = app => {
  const {
    STRING,
  } = app.Sequelize;

  const Follower = db.defineModel(app, 'followers', {
    user_id: {
      type: STRING,
      allowNull: false
    },
    follower_id: {
      type: STRING,
      allowNull: false
    }
  });
  return Follower;
}