module.exports = app => {
  const {
    STRING
  } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: STRING,
      primaryKey: true
    },
    name: STRING,
    password: STRING
  });
  
  return User;
}