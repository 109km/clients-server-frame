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
  async updateGoals(goalsData) {
    const {
      ctx
    } = this;
    const goals = JSON.stringify(goalsData.goals);
    const dreamId = goalsData.dream_id;
    const updatedResult = await ctx.model.Dream.update({
      goalsList: goals
    }, {
      where: {
        id: dreamId
      }
    });
    // Updated successfully.
    // But the sequelize's update method won't return the instance.
    // So we have to make another `find`.
    let res;
    if (updatedResult[0] === 1) {
      res = await this.findOne({
        dreamId: dreamId
      });
    } else {
      res = STATUS_CODE['UNKNOWN_ERROR'];
    }
    return res;
  }

  async updateTiers(tiersData) {
    const {
      ctx
    } = this;
    const tiers = JSON.stringify(tiersData.tiers);
    const dreamId = tiersData.dream_id;
    const updatedResult = await ctx.model.Dream.update({
      tiers_list: tiers
    }, {
      where: {
        id: dreamId
      }
    });
    // Updated successfully.
    // But the sequelize's update method won't return the instance.
    // So we have to make another `find`.
    let res;
    if (updatedResult[0] === 1) {
      res = await this.findOne({
        dream_id: dreamId
      });
    } else {
      res = STATUS_CODE['UNKNOWN_ERROR'];
    }
    return res;
  }

  async findOne(params) {
    const {
      ctx
    } = this;
    let where = {};
    if (params.dream_id) {
      where = {
        id: params.dream_id
      };
    } else if (params.user_id) {
      where = {
        user_id: params.user_id
      };
    }
    const dream = await ctx.model.Dream.findOne({
      where: where,
      include: [{
        model: ctx.model.User,
        attributes: ['nickname', 'avatar_url']
      }, {
        model: ctx.model.Post
      }]
    });
    let res;
    if (dream) {
      res = STATUS_CODE['SUCCESS'];
      res.data = dream;
    } else {
      res = STATUS_CODE['DREAM_NOT_FOUND'];
    }
    return res;
  }

  async updateOne(params) {
    const {
      ctx
    } = this;

    const dream = await ctx.model.Dream.findOne({
      where: {
        id: params.dream_id
      },
      include: [{
        model: ctx.model.User,
        attributes: ['nickname', 'avatar_url']
      }, {
        model: ctx.model.Post
      }]
    });
    let res;
    if (dream) {
      res = STATUS_CODE['SUCCESS'];
      res.data = dream;
    } else {
      res = STATUS_CODE['DREAM_NOT_FOUND'];
    }
    return res;
  }

  async findAndCountAll(params = {}) {
    const {
      ctx
    } = this;
    const dreams = await ctx.model.Dream.findAndCountAll({
      include: [{
        model: ctx.model.User
      }],
      offset: params.start || 0,
      limit: params.limit || 10
    });
    let res;
    if (dreams) {
      dreams.rows.map((dream) => {
        dream.dataValues.nickname = dream.user.nickname;
        dream.dataValues.avatar_url = dream.user.avatar_url;
        delete dream.dataValues.user
        return dream;
      });
      res = STATUS_CODE['SUCCESS'];
      res.data = dreams;
    } else {
      res = STATUS_CODE['POST_NOT_FOUND'];
    }
    return res;
  }

}

module.exports = DreamService;