import React, { Component } from 'react';
import './PostList.less';
import PostItem from '../PostItem/PostItem';

class PostList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <PostItem key={index} title={item.title} content={item.content} />
    );

    return (
      <div className="com-post-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default PostList;
