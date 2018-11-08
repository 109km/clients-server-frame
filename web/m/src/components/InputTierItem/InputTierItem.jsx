import React, { Component } from 'react';
import { InputItem, WhiteSpace, TextareaItem } from 'antd-mobile';
import './InputTierItem.less';

class InputTierItem extends Component {
  render() {
    return (
      <div className="com-tier-item">
        <div className="com-tier-item-title">
          支持金额
        </div>
        <InputItem
          placeholder="支持金额"
          value={this.props.price}
          onChange={(value) => this.onPriceChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
        <div className="com-tier-item-title">
          回报标题
        </div>
        <InputItem
          placeholder="回报标题"
          value={this.props.title}
          onChange={(value) => this.onTitleChange(value, this.props.index)}
        />
        <WhiteSpace size="lg" />
        <div className="com-tier-item-title">
          回报内容
        </div>
        <TextareaItem
          rows={5}
          placeholder="回报内容"
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
  onPriceChange(value, index) {
    this.props.onUpdate('price', value, index);
  }
}

export default InputTierItem;
