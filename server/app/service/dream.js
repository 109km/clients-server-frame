const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
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
    //   pics: {
    //     type: 'string'
    //   }
    // };
    // // 校验参数
    // ctx.validate(createRule);
    const dream = await ctx.model.Dream.create(dreamData, {
      isNewRecord: true
    });
    const res = STATUS_CODE['SUCCESS'];
    res.data = dream;
    return res;
  }

  async findOne(postParams) {
    const {
      ctx
    } = this;
    const post = await ctx.model.Dream.findOne({
      where: {
        id: postParams.postId
      },
    });
    console.log(post);

    let res;
    if (post) {
      res = STATUS_CODE['SUCCESS'];
      res.data = post;
    } else {
      res = STATUS_CODE['POST_NOT_FOUND'];
    }
    return res;
  }
}

module.exports = DreamService;