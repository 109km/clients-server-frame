import React, { Component } from 'react';
import './InputTierList.less';
import InputTierItem from '../InputTierItem/InputTierItem';

class InputTierList extends Component {
  render() {
    const items = this.props.items.map((item, index) =>
      <InputTierItem onUpdate={this.onUpdate.bind(this)} key={index} index={index} title={item.title} content={item.content} />
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
    // const res = await fetch(Config.apiUrl + '/user/login/');
    // console.log(res);
  }
}

export default InputTierList;
