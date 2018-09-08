import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './home.less';
class Home extends Component {
  render() {
    return (
      <div className="page">
        
        <Button type="primary">+ Brag</Button>
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default Home;
