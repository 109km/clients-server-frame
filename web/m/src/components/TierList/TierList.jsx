import React, { Component } from 'react';
import './TierList.less';
import TierItem from '../TierItem/TierItem';

class TierList extends Component {
  render() {
    const items = this.props.items.map((item, index) =>
      <TierItem onUpdate={this.onUpdate.bind(this)} key={index} index={index} title={item.title} content={item.content} />
    );
    return (
      <div className="com-tier-list">
        {items}
      </div>
    );
  }
  onUpdate = async (type, value, index) => {
    this.props.onUpdate(type, value, index);
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default TierList;
