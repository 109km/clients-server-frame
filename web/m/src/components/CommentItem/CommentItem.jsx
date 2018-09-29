import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './CommentItem.less';

class CommentItem extends Component {
  render() {
    return (
      <WingBlank className="com-comment-item">
        <div className="title">
          {this.props.title}
        </div>
        <div className="info">
          <img className="avatar" src={this.props.avatar} alt={this.props.nickname}/>
          <span className="nickname">
            {this.props.nickname}
          </span>
          <span className="date">
            {this.props.date}
          </span>
        </div>

      </WingBlank>
    );
  }
}

export default CommentItem;
