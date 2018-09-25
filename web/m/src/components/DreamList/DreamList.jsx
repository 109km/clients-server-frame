import React, { Component } from 'react';
import './DreamList.less';
import DreamItem from '../DreamItem/DreamItem';

class DreamList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <DreamItem key={index} title={item.title} avatar={item.avatar} author={item.author} date={item.date} />
    );

    return (
      <div className="com-brag-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default DreamList;
