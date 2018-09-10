import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WingBlank, List, TextareaItem } from 'antd-mobile';
import './edit.less';

class BragItem extends Component {
  render() {
    return (
      <div className="page page-edit">
        <List>
          <TextareaItem
          rows={10}
          placeholder="输入点啥"
          />
        </List>
      </div>
    );
  }
}

BragItem.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default BragItem;
