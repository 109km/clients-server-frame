import React, { Component } from 'react';
import './DreamList.less';
import DreamItem from '../DreamItem/DreamItem';

class DreamList extends Component {
  render() {

    const items = this.props.items.map((item, index) =>
      <DreamItem key={index} dreamId={item.id} title={item.title} avatar={item.avatarUrl} nickname={item.nickname} date={item.updatedAt} content={item.content} />
    );

    return (
      <div className="com-brag-list">
        {items}
      </div>
    );
  }
  async componentDidMount() {
    // const res = await fetch(Config.apiUrl + '/user/login/');
    // console.log(res);
  }
}

export default DreamList;
