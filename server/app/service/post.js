const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
class PostService extends Service {
  async create(postData) {
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
    console.log(postData);
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
        id: postParams.post_id
      },
      include: [{
        model: ctx.model.Comment
      }, {
        model: ctx.model.User,
        attributes: ['avatar_url', 'nickname']
      }]
    });

    const comments = await ctx.service.comment.findCommentsByPostId({
      post_id: postParams.post_id
    });

    let commentsData = comments.data;
    commentsData = commentsData.map((value, index) => {
      let val = value.dataValues;
      val.nickname = val.user.dataValues.nickname;
      val.avatar_url = val.user.dataValues.avatar_url;
      delete val.user;
      value.dataValues = val;
      return value;
    });

    post.dataValues.comments = commentsData;
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