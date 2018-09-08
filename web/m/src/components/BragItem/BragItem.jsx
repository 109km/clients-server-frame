import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './BragItem.less';
class BragItem extends Component {
  render() {
    return (
      <div className="com-brag-item">
        title,
        author,
        date    
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default BragItem;
