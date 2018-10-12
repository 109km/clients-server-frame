import React, { Component } from 'react';
import { filterHTML } from '../../utils/util';
import './PostItem.less';

class PostItem extends Component {
  render() {
    return (
      <div className="com-post-item">
        <div className="author-info">
          <img src={this.props.avatar} alt="" className="avatar"/>
          <div className="name">
            {this.props.nickname}
          </div>
          <div className="date">
            发布于 {this.props.item.date}
          </div>
        </div>
        <div className="title">
          {this.props.item.title}
        </div>
        <div className="content">
          {filterHTML(this.props.item.content)}
        </div>
      </div>
    );
  }
}

export default PostItem;
