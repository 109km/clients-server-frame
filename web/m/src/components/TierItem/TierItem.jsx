import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './TierItem.less';

class TierItem extends Component {
  render() {
    return (
      <div className="com-tier-item">
        <div className="title">
          {this.props.item.title}
        </div>
        <div className="content">
          {this.props.item.content}
        </div>
        <div className="num">
          {this.props.item.backersNum}
        </div>
        <Button className="btn-join" type="primary" size="small">
          <span className="bold">¥{this.props.item.price}</span> 立即加入
        </Button>
      </div>
    );
  }
}

export default TierItem;
