import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './home.less';
import DreamList from '../../components/DreamList/DreamList';

const items = [{
  title: '我要在30岁之前登上乞力马扎罗山',
  avatar: 'http://img.hb.aicdn.com/ae33521b96401212eee4ca4c2e8fd5001c380b251d3b5-LgMIla_fw658',
  author: '树人哥',
  date: '09-07'
}, {
  title: '我要在30岁之前登上乞力马扎罗山',
  avatar: 'http://img.hb.aicdn.com/ae33521b96401212eee4ca4c2e8fd5001c380b251d3b5-LgMIla_fw658',
  author: '树人哥',
  date: '09-08'
}];

class Home extends Component {
  render() {
    return (
      <div className="page page-home">
        <DreamList items={items} />
        <Link to="/edit">
          <Button type="primary" >
            Brag
          </Button>
        </Link>
      </div>
    );
  }
  async componentDidMount() {
    const res = await post('http://127.0.0.1:7001/user/detail/');
    // console.log(res);
  }
}

export default Home;
