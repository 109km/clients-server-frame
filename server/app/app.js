module.exports = app => {

  app.cache = new Cache();

  app.beforeStart(async () => {
    await app.model.sync({
      force: true
    });
  });
}