'use strict';

const mockjs = require('mockjs');

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async fake_chart_data() {
    this.ctx.body = {"visitData":[{"x":"2017-11-08","y":7},{"x":"2017-11-09","y":5},{"x":"2017-11-10","y":4},{"x":"2017-11-11","y":2},{"x":"2017-11-12","y":4},{"x":"2017-11-13","y":7},{"x":"2017-11-14","y":5},{"x":"2017-11-15","y":6},{"x":"2017-11-16","y":5},{"x":"2017-11-17","y":9},{"x":"2017-11-18","y":6},{"x":"2017-11-19","y":3},{"x":"2017-11-20","y":1},{"x":"2017-11-21","y":5},{"x":"2017-11-22","y":3},{"x":"2017-11-23","y":6},{"x":"2017-11-24","y":5}],"visitData2":[{"x":"2017-11-08","y":1},{"x":"2017-11-09","y":6},{"x":"2017-11-10","y":4},{"x":"2017-11-11","y":8},{"x":"2017-11-12","y":3},{"x":"2017-11-13","y":7},{"x":"2017-11-14","y":2}],"salesData":[{"x":"1月","y":479},{"x":"2月","y":860},{"x":"3月","y":794},{"x":"4月","y":282},{"x":"5月","y":788},{"x":"6月","y":290},{"x":"7月","y":465},{"x":"8月","y":634},{"x":"9月","y":1120},{"x":"10月","y":882},{"x":"11月","y":206},{"x":"12月","y":271}],"searchData":[{"index":1,"keyword":"搜索关键词-0","count":661,"range":51,"status":1},{"index":2,"keyword":"搜索关键词-1","count":89,"range":44,"status":0},{"index":3,"keyword":"搜索关键词-2","count":152,"range":48,"status":1},{"index":4,"keyword":"搜索关键词-3","count":520,"range":94,"status":1},{"index":5,"keyword":"搜索关键词-4","count":51,"range":4,"status":1},{"index":6,"keyword":"搜索关键词-5","count":500,"range":68,"status":1},{"index":7,"keyword":"搜索关键词-6","count":7,"range":48,"status":0},{"index":8,"keyword":"搜索关键词-7","count":741,"range":79,"status":0},{"index":9,"keyword":"搜索关键词-8","count":976,"range":59,"status":0},{"index":10,"keyword":"搜索关键词-9","count":674,"range":26,"status":0},{"index":11,"keyword":"搜索关键词-10","count":426,"range":39,"status":0},{"index":12,"keyword":"搜索关键词-11","count":720,"range":84,"status":1},{"index":13,"keyword":"搜索关键词-12","count":490,"range":21,"status":0},{"index":14,"keyword":"搜索关键词-13","count":936,"range":20,"status":1},{"index":15,"keyword":"搜索关键词-14","count":508,"range":25,"status":0},{"index":16,"keyword":"搜索关键词-15","count":363,"range":58,"status":0},{"index":17,"keyword":"搜索关键词-16","count":875,"range":13,"status":1},{"index":18,"keyword":"搜索关键词-17","count":824,"range":34,"status":0},{"index":19,"keyword":"搜索关键词-18","count":398,"range":1,"status":1},{"index":20,"keyword":"搜索关键词-19","count":669,"range":45,"status":0},{"index":21,"keyword":"搜索关键词-20","count":962,"range":81,"status":1},{"index":22,"keyword":"搜索关键词-21","count":402,"range":3,"status":1},{"index":23,"keyword":"搜索关键词-22","count":642,"range":56,"status":0},{"index":24,"keyword":"搜索关键词-23","count":248,"range":21,"status":1},{"index":25,"keyword":"搜索关键词-24","count":686,"range":9,"status":1},{"index":26,"keyword":"搜索关键词-25","count":477,"range":87,"status":1},{"index":27,"keyword":"搜索关键词-26","count":319,"range":42,"status":0},{"index":28,"keyword":"搜索关键词-27","count":495,"range":5,"status":0},{"index":29,"keyword":"搜索关键词-28","count":752,"range":9,"status":1},{"index":30,"keyword":"搜索关键词-29","count":506,"range":43,"status":0},{"index":31,"keyword":"搜索关键词-30","count":282,"range":55,"status":1},{"index":32,"keyword":"搜索关键词-31","count":114,"range":54,"status":1},{"index":33,"keyword":"搜索关键词-32","count":790,"range":9,"status":0},{"index":34,"keyword":"搜索关键词-33","count":292,"range":31,"status":1},{"index":35,"keyword":"搜索关键词-34","count":72,"range":90,"status":0},{"index":36,"keyword":"搜索关键词-35","count":131,"range":69,"status":1},{"index":37,"keyword":"搜索关键词-36","count":70,"range":63,"status":0},{"index":38,"keyword":"搜索关键词-37","count":417,"range":15,"status":0},{"index":39,"keyword":"搜索关键词-38","count":711,"range":96,"status":0},{"index":40,"keyword":"搜索关键词-39","count":251,"range":82,"status":0},{"index":41,"keyword":"搜索关键词-40","count":60,"range":7,"status":0},{"index":42,"keyword":"搜索关键词-41","count":799,"range":2,"status":0},{"index":43,"keyword":"搜索关键词-42","count":227,"range":60,"status":1},{"index":44,"keyword":"搜索关键词-43","count":164,"range":69,"status":0},{"index":45,"keyword":"搜索关键词-44","count":574,"range":74,"status":1},{"index":46,"keyword":"搜索关键词-45","count":26,"range":35,"status":0},{"index":47,"keyword":"搜索关键词-46","count":279,"range":28,"status":1},{"index":48,"keyword":"搜索关键词-47","count":728,"range":30,"status":1},{"index":49,"keyword":"搜索关键词-48","count":57,"range":87,"status":1},{"index":50,"keyword":"搜索关键词-49","count":277,"range":34,"status":0}],"offlineData":[{"name":"门店0","cvr":0.6},{"name":"门店1","cvr":0.6},{"name":"门店2","cvr":0.1},{"name":"门店3","cvr":0.8},{"name":"门店4","cvr":0.9},{"name":"门店5","cvr":0.4},{"name":"门店6","cvr":0.8},{"name":"门店7","cvr":0.5},{"name":"门店8","cvr":0.3},{"name":"门店9","cvr":0.5}],"offlineChartData":[{"x":1510137570394,"y1":105,"y2":91},{"x":1510139370394,"y1":103,"y2":82},{"x":1510141170394,"y1":15,"y2":104},{"x":1510142970394,"y1":28,"y2":52},{"x":1510144770394,"y1":41,"y2":76},{"x":1510146570394,"y1":26,"y2":12},{"x":1510148370394,"y1":93,"y2":90},{"x":1510150170394,"y1":61,"y2":80},{"x":1510151970394,"y1":24,"y2":51},{"x":1510153770394,"y1":37,"y2":84},{"x":1510155570394,"y1":47,"y2":62},{"x":1510157370394,"y1":39,"y2":25},{"x":1510159170394,"y1":21,"y2":89},{"x":1510160970394,"y1":85,"y2":14},{"x":1510162770394,"y1":44,"y2":94},{"x":1510164570394,"y1":31,"y2":75},{"x":1510166370394,"y1":19,"y2":12},{"x":1510168170394,"y1":44,"y2":79},{"x":1510169970394,"y1":86,"y2":61},{"x":1510171770394,"y1":38,"y2":76}],"salesTypeData":[{"x":"家用电器","y":4544},{"x":"食用酒水","y":3321},{"x":"个护健康","y":3113},{"x":"服饰箱包","y":2341},{"x":"母婴产品","y":1231},{"x":"其他","y":1231}],"salesTypeDataOnline":[{"x":"家用电器","y":244},{"x":"食用酒水","y":321},{"x":"个护健康","y":311},{"x":"服饰箱包","y":41},{"x":"母婴产品","y":121},{"x":"其他","y":111}],"salesTypeDataOffline":[{"x":"家用电器","y":99},{"x":"个护健康","y":188},{"x":"服饰箱包","y":344},{"x":"母婴产品","y":255},{"x":"其他","y":65}],"radarData":[{"name":"个人","label":"引用","value":10},{"name":"个人","label":"口碑","value":8},{"name":"个人","label":"产量","value":4},{"name":"个人","label":"贡献","value":5},{"name":"个人","label":"热度","value":7},{"name":"团队","label":"引用","value":3},{"name":"团队","label":"口碑","value":9},{"name":"团队","label":"产量","value":6},{"name":"团队","label":"贡献","value":3},{"name":"团队","label":"热度","value":1},{"name":"部门","label":"引用","value":4},{"name":"部门","label":"口碑","value":1},{"name":"部门","label":"产量","value":6},{"name":"部门","label":"贡献","value":5},{"name":"部门","label":"热度","value":7}]}
  }
  async currentUser() {
    this.ctx.body = {"name":"momo.zxy","avatar":"https://gw.alipayobjects.com/zos/rmsportal/UjusLxePxWGkttaqqmUI.png","userid":"00000001","notifyCount":12};
  }
  async tags() {
    this.ctx.body = mockjs.mock({
      'list|100' : [{'name':'@city', 'value|1-100':150, 'type|0-2':1}]
    });
  }
  async getNotice() {
    this.ctx.body = [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: '那是一种内在的东西， 他们到达不了，也无法触及的',
        updatedAt: new Date(),
        member: '科学搬砖组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        updatedAt: new Date('2017-07-24'),
        member: '全组都是吴彦祖',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        updatedAt: new Date(),
        member: '中二少女团',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: '那时候我只会想自己想要什么，从不想自己拥有什么',
        updatedAt: new Date('2017-07-23'),
        member: '程序员日常',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: '凛冬将至',
        updatedAt: new Date('2017-07-23'),
        member: '高逼格设计天团',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: titles[5],
        logo: avatars[5],
        description: '生命就像一盒巧克力，结果往往出人意料',
        updatedAt: new Date('2017-07-23'),
        member: '骗你来学计算机',
        href: '',
        memberLink: '',
      },
    ];
  }
}

module.exports = ApiController;