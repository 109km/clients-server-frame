import React, { Component } from 'react';
import './InputGoalList.less';
import InputGoalItem from '../InputGoalItem/InputGoalItem';

class InputGoalList extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }
  render() {
    const items = this.props.items.map((item, index) =>
      <InputGoalItem onUpdate={this.onUpdate.bind(this)} key={index} index={index} title={item.title} content={item.content} />
    );
    return (
      <div className="com-goal-list">
        {items}
      </div>
    );
  }
  onUpdate(type, value, index) {
    this.props.onUpdate(type, value, index);
  }
}

export default InputGoalList;
