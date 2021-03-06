import React, { Component } from 'react';
import './PostList.less';
import PostItem from '../PostItem/PostItem';

class PostList extends Component {
  render() {

    const items = this.props.items.map((item, index) =>
      <PostItem key={index} item={item} avatar={this.props.avatar} nickname={this.props.nickname} />
    );

    const emptyTips = () => {
      <div className="com-empty-tips">暂无文章</div>
    }

    return (
      <div className="com-post-list">
        {items.length > 0 ? items : emptyTips}
      </div>
    );
      }
    }
    
    export default PostList;
