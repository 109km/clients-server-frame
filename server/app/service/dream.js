const Service = require('egg').Service;

class DreamService extends Service {
  async create(dreamData) {
    const {
      ctx
    } = this;
    const createRule = {
      userId: {
        type: 'string'
      },
      content: {
        type: 'string'
      },
    };
    // 校验参数
    ctx.validate(createRule);
    await ctx.model.dream.create(dreamData);
    return {
      code: 0,
      message: 'success',
    }
  }
}

module.exports = DreamService;