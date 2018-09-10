import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import './BragItem.less';

class BragItem extends Component {
  render() {
    return (
      <WingBlank className="com-brag-item">
        <div className="title">
          {this.props.title}
        </div>
        <div className="info">
          <img className="avatar" src={this.props.avatar} alt={this.props.author}/>
          <span className="author">
            {this.props.author}
          </span>
          <span className="date">
            {this.props.date}
          </span>
        </div>

      </WingBlank>
    );
  }
}

export default BragItem;
