import React, { Component } from 'react';
import { InputItem, WhiteSpace, TextareaItem } from 'antd-mobile';
import './GoalItem.less';

class GoalItem extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
  }
  render() {
    return (
      <div className="com-goal-item">
        <InputItem
          placeholder="阶段目标"
          value={this.props.title}
          onChange={(value) => this.onTitleChange(value, this.props.index)}
        />
        <TextareaItem
          rows={8}
          placeholder="目标内容"
          value={this.props.content}
          onChange={(value) => this.onDescChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default GoalItem;
