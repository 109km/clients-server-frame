const VERSION = '1.0.0';

function defineModel(app, name, attributes) {
  const {
    INTEGER
  } = app.Sequelize;

  let attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull && true;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: true
      };
    }
  }

  attrs.id = {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  };

  return app.model.define(name, attrs, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    // version: 'version'
  });
}

module.exports = {
  defineModel
};