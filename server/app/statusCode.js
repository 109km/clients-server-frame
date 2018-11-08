/**
 * 1xxxx - 用户相关
 * 101xx - 登录相关
 * 102xx - 注册相关
 * 
 * 2xxxx - 文章相关
 */

module.exports = {
  'SUCCESS': {
    code: 0,
    message: '成功'
  },
  'USER_NOT_EXIST': {
    code: 10100,
    message: '用户不存在'
  },
  'WRONG_PASSWORD': {
    code: 10101,
    message: '您输入的密码不正确'
  },
  'USER_NOT_LOGIN': {
    code: 10102,
    message: '用户未登录'
  },
  'USER_ALREADY_EXIST': {
    code: 10200,
    message: '用户已存在'
  },
  'POST_NOT_FOUND': {
    code: 20100,
    message: '文章未找到'
  },
  'COMMENT_NOT_FOUND': {
    code: 30100,
    message: '留言未找到'
  },
  'DREAM_NOT_FOUND': {
    code: 40100,
    message: '项目未找到'
  },
  'DREAM_ALREADY_CREATED': {
    code: 40200,
    message: '项目已创建'
  },
  'UNKNOWN_ERROR': {
    code: -1,
    message: '未知错误'
  },
  'PARAMS_MISSING': {
    code: -2,
    message: '参数丢失'
  },
}