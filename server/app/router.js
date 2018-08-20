'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/api/fake_chart_data', app.controller.api.fake_chart_data);
  app.get('/api/currentUser', app.controller.api.currentUser);
  app.get('/api/tags', app.controller.api.tags);
  app.post('/api/register', app.controller.api.register);
  app.resources('users', '/api/users', app.controller.user);
};