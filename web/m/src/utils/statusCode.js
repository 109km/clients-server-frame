/**
 * 1xxxx - 用户相关
 * 101xx - 登录相关
 * 102xx - 注册相关
 * 
 * 2xxxx - 文章相关
 */

const STATUS_CODE = {
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

  'POST_NOT_FOUND':{
    code: 20100,
    message: '文章未找到'
  }

}

export default STATUS_CODE;