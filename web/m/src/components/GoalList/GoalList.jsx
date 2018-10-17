import React, { Component } from 'react';
import './GoalList.less';
import GoalItem from '../GoalItem/GoalItem';

class GoalList extends Component {
  render() {
    
    const items = this.props.items.map((item,index) =>
      <GoalItem key={index} title={item.title} content={item.content} />
    );

    return (
      <div className="com-goal-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch(Config.apiUrl + '/user/login/');
    // console.log(res);
  }
}

export default GoalList;
