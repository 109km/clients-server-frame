const Service = require('egg').Service;

class DreamService extends Service {
  async create(dreamData) {
    const {
      ctx
    } = this;
    // const createRule = {
    //   userId: {
    //     type: 'string'
    //   },
    //   content: {
    //     type: 'string'
    //   },
    //   pics: {
    //     type: 'string'
    //   }
    // };
    // // 校验参数
    // ctx.validate(createRule);
    const res = await ctx.model.Dream.create(dreamData, {
      isNewRecord: true
    });
    console.log('Service.create:', res.get('id'));
    return {
      code: 0,
      message: 'success',
      data: res
    }
  }
}

module.exports = DreamService;