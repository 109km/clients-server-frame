import React, { Component } from 'react';
import './GoalList.less';
import GoalItem from '../GoalItem/GoalItem';

class GoalList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <GoalItem key={index} index={index} title={item.title} content={item.content} />
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

export default GoalList;
