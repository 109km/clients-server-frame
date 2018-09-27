import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './PostItem.less';

class PostItem extends Component {
  render() {
    return (
      <div className="com-post-item">
        <div className="title">
          {this.props.title}
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default PostItem;
