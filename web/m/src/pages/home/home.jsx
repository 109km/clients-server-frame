import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './home.less';
import BragList from '../../components/BragList/BragList';

const lists = [{
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
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <div className="page page-home">
        <BragList lists={lists} />
        <Link to="/edit">
          <Button type="primary" >
            Brag
          </Button>
        </Link>
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default Home;
