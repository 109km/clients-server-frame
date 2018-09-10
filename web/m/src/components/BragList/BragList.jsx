import React, { Component } from 'react';
import './BragList.less';
import BragItem from '../BragItem/BragItem';

class BragList extends Component {
  render() {
    
    const bragItems = this.props.lists.map((item,index) =>
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
