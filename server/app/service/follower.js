const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
const dayjs = require('dayjs');
class FollowerService extends Service {
  async add(params) {
    const {
      ctx
    } = this;

    const data = await ctx.model.Follower.findOrCreate({
      where: params
    });
    console.log(data);
    const res = STATUS_CODE['SUCCESS'];
    res.data = data;
    return res;
  }
  async remove(params) {
    const {
      ctx
    } = this;
  }
  async find(params) {
    const {
      ctx
    } = this;

    const data = await ctx.model.Follower.findAll({
      where: params
    });
    console.log(data);
    const res = STATUS_CODE['SUCCESS'];
    res.data = data;
    return res;
  }
}

module.exports = FollowerService;