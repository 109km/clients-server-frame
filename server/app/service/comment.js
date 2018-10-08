const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
class CommentService extends Service {
  async create(commentData) {
    const {
      ctx
    } = this;
    // const createRule = {
    //   userId: {
    //     type: 'number'
    //   },
    //   title: {
    //     type: 'string'
    //   },
    //   content: {
    //     type: 'string'
    //   },
    // };
    // // 校验参数
    // ctx.validate(createRule);
    const comment = await ctx.model.Comment.create(commentData, {
      isNewRecord: true
    });
    const res = STATUS_CODE['SUCCESS'];
    res.data = comment;
    return res;
  }

  async findCommentsByPostId(params) {
    const {
      ctx
    } = this;
    const comment = await ctx.model.Comment.findAll({
      where: {
        postId: params.postId
      },
    });
    let res;
    if (comment) {
      res = STATUS_CODE['SUCCESS'];
      res.data = comment;
    } else {
      res = STATUS_CODE['POST_NOT_FOUND'];
    }
    console.log('findCommentsByPostId',res);
    return res;
  }

  async findOne(params) {
    const {
      ctx
    } = this;
    const comment = await ctx.model.Comment.findOne({
      where: {
        id: params.commentId
      },
    });
    let res;
    if (comment) {
      res = STATUS_CODE['SUCCESS'];
      res.data = comment;
    } else {
      res = STATUS_CODE['POST_NOT_FOUND'];
    }
    return res;
  }
}

module.exports = CommentService;