module.exports = () => {
  return async function snakecase(ctx,next){
    ctx.request.body = ctx.request.body && ctx.helper.toSnakeCase(ctx.request.body);
    await next();
  }
}