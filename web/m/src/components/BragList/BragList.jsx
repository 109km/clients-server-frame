import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './BragList.less';
import BragItem from '../BragItem/BragItem';


const lists = [{
  title: '我要在30岁之前登上乞力马扎罗山',
  avatar: 'https://b-ssl.duitang.com/uploads/item/201806/04/20180604122123_iNGZa.thumb.224_0.jpeg',
  author: '树人哥',
  date: '09-07'
}, {
  title: '我要在30岁之前登上乞力马扎罗山',
  avatar: 'https://b-ssl.duitang.com/uploads/item/201806/04/20180604122123_iNGZa.thumb.224_0.jpeg',
  author: '树人哥',
  date: '09-08'
}];


class BragList extends Component {
  render() {

    const bragItems = lists.map((item,index) =>
      <BragItem key={index} title={item.title} avatar={item.avatar} author={item.author} date={item.date} />
    );

    return (
      <div className="com-brag-list">
        {bragItems}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default BragList;
