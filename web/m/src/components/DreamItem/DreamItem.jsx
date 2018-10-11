import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './DreamItem.less';

class DreamItem extends Component {
  render() {
    return (
      <div className="com-brag-item">
        <div className="author-area">
          <img className="avatar" src={this.props.avatar} alt={this.props.author} />
          <div className="author">
            {this.props.nickname}
          </div>
        </div>
        <div className="info">
          <div className="title">
            {this.props.title}
          </div>
          <div className="content">
            {this.props.content}
          </div>
          {/* <span className="date">
            {this.props.date}
          </span> */}
        </div>
      </div>
    );
  }
}

export default DreamItem;
