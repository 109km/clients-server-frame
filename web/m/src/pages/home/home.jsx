import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './home.less';
import DreamList from '../../components/DreamList/DreamList';

// const items = [{
//   title: '我要在30岁之前登上乞力马扎罗山',
//   avatar: 'http://img.hb.aicdn.com/ae33521b96401212eee4ca4c2e8fd5001c380b251d3b5-LgMIla_fw658',
//   author: '树人哥',
//   date: '09-07'
// }, {
//   title: '我要在30岁之前登上乞力马扎罗山',
//   avatar: 'http://img.hb.aicdn.com/ae33521b96401212eee4ca4c2e8fd5001c380b251d3b5-LgMIla_fw658',
//   author: '树人哥',
//   date: '09-08'
// }];

class Home extends Component {

  state = {
    items: [],
    isLogin: false
  }

  render() {
    return (
      <div className="page page-home">
        <DreamList items={this.state.items} />
        {
          this.state.isLogin ? '' :
            <div className="logion-actions">
              <Link className="btn-login" to="/signup">
                <Button>
                  注册
            </Button>
              </Link>
              <Link className="btn-login" to="/login">
                <Button>
                  登录
            </Button>
              </Link>
            </div>
        }
      </div>
    );
  }
  async componentDidMount() {
    const user = await post(Config.apiUrl + '/user/detail/');
    const dreams = await post(Config.apiUrl + '/dream/list/');
    let isLogin = false;
    console.log(user);
    if (user.data.code === STATUS_CODE['SUCCESS'].code) {
      isLogin = true;
    }

    this.setState({
      items: dreams.data.data.rows,
      isLogin: isLogin
    });
  }
}

export default Home;
