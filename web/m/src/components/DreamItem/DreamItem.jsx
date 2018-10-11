import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './DreamItem.less';

class DreamItem extends Component {
  render() {
    return (
      <WingBlank className="com-brag-item">
        <div className="title">
          {this.props.title}
        </div>
        <div className="info">
          <img className="avatar" src={this.props.avatar} alt={this.props.author} />
          <span className="author">
            {this.props.nickname}
          </span>
          <span className="date">
            {this.props.date}
          </span>
        </div>
        <div className="content">
          {this.props.content}
        </div>

      </WingBlank>
    );
  }
}

export default DreamItem;
