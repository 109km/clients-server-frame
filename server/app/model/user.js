module.exports = app => {
  const {
    STRING
  } = app.Sequelize;

  const User = app.model.define('user', {
    id: STRING,
    name: STRING
  });
  
  return User;
}