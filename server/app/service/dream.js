const Service = require('egg').Service;
const dayjs = require('dayjs');
const STATUS_CODE = require('../statusCode');
const Op = require('sequelize').Op;

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
    let res;
    const findResult = await this.findOne({
      user_id: dreamData.user_id
    });
    if (findResult.code === STATUS_CODE['SUCCESS'].code) {
      res = STATUS_CODE['DREAM_ALREADY_CREATED'];
    } else {
      const dream = await ctx.model.Dream.create(dreamData, {
        isNewRecord: true
      });
      res = STATUS_CODE['SUCCESS'];
      res.data = dream;
    }
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
      if (dream.posts && dream.posts.length) {
        dream.posts.map((item, index) => {
          item.dataValues.date = dayjs(item.dataValues.updated_at).format('MM-DD HH:mm');
        });
      }
      res = STATUS_CODE['SUCCESS'];
      res.data = dream;
    } else {
      res = STATUS_CODE['DREAM_NOT_FOUND'];
    }
    return res;
  }

  async updateOne(where) {
    const {
      ctx
    } = this;

    let updateData = ctx.request.body;
    if (updateData.tiers_list) {
      updateData.tiers_list = JSON.stringify(updateData.tiers_list);
    }
    if (updateData.goals_list) {
      updateData.goals_list = JSON.stringify(updateData.goals_list);
    }
    const updateResult = await ctx.model.Dream.update(updateData, {
      where: where
    });
    let res;
    console.log(updateResult);
    if (updateResult[0] === 1) {
      res = await this.findOne(where);
    } else {
      res = STATUS_CODE['DREAM_NOT_FOUND'];
    }
    return res;
  }

  /**
   * 
   * @param {Object} params 
   * @param {Number} params.start The start index
   * @param {Number} params.limit Count number
   */
  async findAndCountAll(params) {
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
        dream.dataValues.dream_id = dream.id;
        delete dream.dataValues.id;
        delete dream.dataValues.user
        return dream;
      });
      let feeds = dreams.rows;
      dreams.feeds = feeds;
      delete dreams['rows'];
      res = STATUS_CODE['SUCCESS'];
      res.data = dreams;
    } else {
      res = STATUS_CODE['FEEDS_NOT_FOUND'];
    }
    return res;
  }

  async findWithFilter(params) {
    const {
      ctx
    } = this;

    const dreams = await ctx.model.Dream.findAndCountAll({
      where: {
        title: {
          [Op.like]: `%${params.keyword}%`
        }
      },
      include: [{
        model: ctx.model.User
      }]
    });
    let res;
    if (dreams) {
      dreams.rows.map((dream) => {
        dream.dataValues.nickname = dream.user.nickname;
        dream.dataValues.avatar_url = dream.user.avatar_url;
        dream.dataValues.dream_id = dream.id;
        delete dream.dataValues.id;
        delete dream.dataValues.user
        return dream;
      });
      let feeds = dreams.rows;
      dreams.feeds = feeds;
      delete dreams['rows'];
      res = STATUS_CODE['SUCCESS'];
      res.data = dreams;
    } else {
      res = STATUS_CODE['SEARCH_RESULTS_NOT_FOUND'];
    }
    return res;
  }

}

module.exports = DreamService;