'use strict';
module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.fetchById(id);
    },
    users(root, _, ctx){
      return ctx.connector.user.fetchAll();
    }
  },
};