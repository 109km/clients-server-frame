import React, { Component } from 'react';
import './TierList.less';
import TierItem from '../TierItem/TierItem';

class TierList extends Component {
  render() {

    const items = this.props.items.map((item, index) =>
      <TierItem key={index} item={item} />
    );

    return (
      <div className="com-tier-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch(Config.apiUrl + '/user/login/');
    // console.log(res);
  }
}

export default TierList;
