import React, { Component } from 'react';
import './PostList.less';
import PostItem from '../PostItem/PostItem';

class PostList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <PostItem key={index} item={item} avatar={this.props.avatar} nickname={this.props.nickname} />
    );

    return (
      <div className="com-post-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch(Config.apiUrl + '/user/login/');
    // console.log(res);
  }
}

export default PostList;
