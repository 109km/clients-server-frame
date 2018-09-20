const Service = require('egg').Service;
const STATUS_CODE = require('../statusCode');
const format = require('date-fns/format');
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
        compare: 're-password'
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
  async findOne(data, isUpdate = false) {
    const {
      ctx
    } = this;
    let res;
    let userData = Object.assign({}, data);
    userData.password = ctx.helper.encrypt(userData.password);
    const user = await ctx.model.User.findOne({
      where: userData,
    });
    if (user) {
      if (isUpdate) {
        user.update({
          lastSignInAt: format(new Date(), 'YYYY-MM-D HH:mm:ssTZ')
        });
      }
      res = STATUS_CODE['SUCCESS'];
      res.data = {
        user
      };
    } else {
      res = STATUS_CODE['USER_NOT_EXIST'];
    }
    return res;
  }
}

module.exports = UserService;