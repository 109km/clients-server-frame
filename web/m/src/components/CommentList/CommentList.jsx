import React, { Component } from 'react';
import './CommentList.less';
import CommentList from '../CommentList/CommentList';

class CommentList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <CommentList key={index} comment={item.comment} avatar={item.avatar} nickname={item.nickname} date={item.date} />
    );

    return (
      <div className="com-comment-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default CommentList;
