import React, { Component } from 'react';
import { filterHTML } from '../../utils/util';
import { Link } from 'react-router-dom';
import './PostItem.less';

class PostItem extends Component {
  render() {
    return (
      <div className="com-post-item">
        <div className="author-info">
          <img src={this.props.avatar} alt="" className="avatar" />
          <div className="name">
            {this.props.nickname}
          </div>
          <div className="date">
            发布于 {this.props.item.date}
          </div>
        </div>
        <Link className="title" to={"/post/detail?postId=" + this.props.item.id}>
          {this.props.item.title}
        </Link>
        <Link className="content" to={"/post/detail?postId=" + this.props.item.id}>
          {filterHTML(this.props.item.content)}
        </Link>
      </div>
    );
  }
}

export default PostItem;
