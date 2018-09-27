import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './PostItem.less';

class PostItem extends Component {
  render() {
    return (
      <div className="com-post-item">
        <div className="author-info">
          <img src={this.props.item.avatar} alt="" className="avatar"/>
          <div className="name">
            {this.props.item.author}
          </div>
          <div className="date">
            发布于 {this.props.item.date}
          </div>
        </div>
        <div className="title">
          {this.props.item.title}
        </div>
        <div className="content">
          {this.props.item.content}
        </div>
      </div>
    );
  }
}

export default PostItem;
