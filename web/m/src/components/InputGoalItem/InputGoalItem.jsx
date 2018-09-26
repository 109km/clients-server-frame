import React, { Component } from 'react';
import { InputItem, WhiteSpace, TextareaItem } from 'antd-mobile';
import './InputGoalItem.less';

class InputGoalItem extends Component {
  render() {
    return (
      <div className="com-goal-item">
        <div className="com-goal-item-title">
          目标标题
        </div>
        <InputItem
          placeholder="阶段目标"
          value={this.props.title}
          onChange={(value) => this.onTitleChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
        <div className="com-goal-item-title">
          目标内容
        </div>
        <TextareaItem
          rows={5}
          placeholder="目标内容"
          value={this.props.content}
          onChange={(value) => this.onDescChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
      </div>
    );
  }
  onTitleChange(value, index) {
    console.log(value, index);
    this.props.onUpdate('title', value, index);
    // this.props.title = value;
  }
  onDescChange(value, index) {
    console.log(value, index);
    this.props.onUpdate('content', value, index);
  }
}

export default InputGoalItem;
