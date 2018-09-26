import React, { Component } from 'react';
import { InputItem, WhiteSpace, TextareaItem } from 'antd-mobile';
import './TierItem.less';

class TierItem extends Component {
  render() {
    return (
      <div className="com-tier-item">
        <div className="com-tier-item-title">
          目标标题
        </div>
        <InputItem
          placeholder="支持标题"
          value={this.props.title}
          onChange={(value) => this.onTitleChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
        <div className="com-tier-item-title">
          目标内容
        </div>
        <TextareaItem
          rows={5}
          placeholder="支持内容"
          value={this.props.content}
          onChange={(value) => this.onDescChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
      </div>
    );
  }
  onTitleChange(value, index) {
    this.props.onUpdate('title', value, index);
  }
  onDescChange(value, index) {
    this.props.onUpdate('content', value, index);
  }
}

export default TierItem;
