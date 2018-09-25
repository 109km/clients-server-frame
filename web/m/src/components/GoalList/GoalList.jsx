import React, { Component } from 'react';
import './GoalList.less';
import GoalItem from '../GoalItem/GoalItem';

class GoalList extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }
  render() {
    const items = this.props.items.map((item, index) =>
      <GoalItem onUpdate={this.onUpdate.bind(this)} key={index} index={index} title={item.title} content={item.content} />
    );
    return (
      <div className="com-goal-list">
        {items}
      </div>
    );
  }
  onUpdate(type, value, index) {
    console.log('GoalList:', type, value, index);
    console.log(this);
    this.props.onUpdate(type, value, index);
  }
  async componentDidMount() {
    // const res = await fetch('http://127.0.0.1:7001/user/login/');
    // console.log(res);
  }
}

export default GoalList;
