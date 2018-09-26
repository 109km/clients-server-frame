import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './GoalItem.less';

class GoalItem extends Component {
  render() {
    return (
      <WingBlank className="com-goal-item">
        <div className="title">
          {this.props.title}
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </WingBlank>
    );
  }
}

export default GoalItem;
