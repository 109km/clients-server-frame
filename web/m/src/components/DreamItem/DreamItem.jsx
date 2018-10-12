import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './DreamItem.less';

class DreamItem extends Component {
  render() {
    return (
      <div className="com-brag-item">
        <div className="author-area">
          <img className="avatar" src={this.props.avatar} alt={this.props.author} />
        </div>
        <Link className="info" to={"/dream/detail?dreamId=" + this.props.dreamId}>
          <div className="author">
            {this.props.nickname} is making
          </div>
          <div className="title">
            {this.props.title}
          </div>
          <div className="content">
            {this.props.content}
          </div>
          {/* <span className="date">
            {this.props.date}
          </span> */}
        </Link>
      </div>
    );
  }
}

export default DreamItem;
