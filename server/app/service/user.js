const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
const dayjs = require('dayjs');
class UserService extends Service {
  async create(userData) {
    const {
      ctx
    } = this;
    const createRule = {
      username: {
        type: 'string'
      },
      password: {
        type: 'password',
        compare: 're_password'
      },
    };
    // 校验参数
    ctx.validate(createRule);
    // 密码加密储存
    userData.password = ctx.helper.encrypt(userData.password);
    const res = await ctx.model.User.findOrCreate({
      where: {
        username: userData.username
      },
      defaults: {
        password: userData.password
      }
    });
    if (res[1]) {
      let ret = STATUS_CODE['SUCCESS'];
      ret.data = res[0];
      return ret;
    } else {
      return STATUS_CODE['USER_ALREADY_EXIST'];
    }

  }
  async findOne(data, isNewSignIn = false) {
    const {
      ctx
    } = this;
    let res;
    let userData = Object.assign({}, data);
    if (userData.password) {
      userData.password = ctx.helper.encrypt(userData.password);
    }
    let user = await ctx.model.User.findOne({
      where: userData,
    });
    if (user) {
      if (isNewSignIn) {
        user = await user.update({
          last_signin_at: dayjs().format('YYYY-MM-D HH:mm:ss')
        });
      }
      res = STATUS_CODE['SUCCESS'];
      res.data = user.dataValues;
    } else {
      res = STATUS_CODE['USER_NOT_EXIST'];
    }
    return res;
  }

  async updateOne(id, userData) {
    const {
      ctx
    } = this;
    let res;
    let where = {
      id: id
    };
    if (userData.password) {
      userData.password = ctx.helper.encrypt(userData.password);
    }
    let updateResult = await ctx.model.User.update(userData, {
      where: where
    });
    if (updateResult[0] === 1) {
      res = await this.findOne(where);
    } else {
      res = STATUS_CODE['USER_NOT_EXIST'];
    }
    return res;
  }
}

module.exports = UserService;