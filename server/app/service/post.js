const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
class PostService extends Service {
  async create(postData) {
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
      pics: {
        type: 'string'
      }
    };
    // 校验参数
    ctx.validate(createRule);
    const post = await ctx.model.Post.create(postData, {
      isNewRecord: true
    });
    const res = STATUS_CODE['SUCCESS'];
    res.data = post;
    return res;
  }

  async findOne(postParams) {
    const {
      ctx
    } = this;
    const post = await ctx.model.Post.findOne({
      where: {
        id: postParams.postId
      },
    });
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

module.exports = PostService;