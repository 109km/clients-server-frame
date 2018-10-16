import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './CommentItem.less';

class CommentItem extends Component {
  render() {
    return (
      <WingBlank className="com-comment-item">
        <div className="info">
          <img className="avatar" src={this.props.avatar} alt={this.props.nickname} />
          <span className="nickname bold">
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

export default CommentItem;