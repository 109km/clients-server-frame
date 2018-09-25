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
  async addGoals(goalsData) {
    const {
      ctx
    } = this;

    const dream = await ctx.model.Dream.update({
      goals: goalsData.goals
    }, {
      where: {
        id: goalsData.dreamId
      }
    });
    const res = STATUS_CODE['SUCCESS'];
    res.data = dream;
    return res;
  }

  async findOne(dreamParams) {
    const {
      ctx
    } = this;
    const dream = await ctx.model.Dream.findOne({
      where: {
        id: dreamParams.dreamId
      },
    });
    console.log(dream);

    let res;
    if (dream) {
      res = STATUS_CODE['SUCCESS'];
      res.data = dream;
    } else {
      res = STATUS_CODE['POST_NOT_FOUND'];
    }
    return res;
  }
}

module.exports = DreamService;