import React, { Component } from 'react';
import './CommentList.less';
import CommentItem from '../CommentItem/CommentItem';

class CommentList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <CommentItem key={index} content={item.content} avatar={item.avatarUrl} nickname={item.nickname} date={item.date} />
    );

    return (
      <div className="com-comment-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch(Config.apiUrl + '/user/login/');
    // console.log(res);
  }
}

export default CommentList;
