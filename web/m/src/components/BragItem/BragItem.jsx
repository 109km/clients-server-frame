import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          <img className="avatar" src={this.props.avatar} />
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

BragItem.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default BragItem;
