module.exports = app => {
  const {
    STRING
  } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: STRING,
      primaryKey: true
    },
    username: STRING,
    password: STRING
  });
  
  return User;
}