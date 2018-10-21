import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { List } from 'antd-mobile';
import { post, Config } from '../../utils/util';
import './my.less';
import { SET_USER_INFO } from '../../models/actions'

const Item = List.Item;
const Brief = Item.Brief;

class My extends Component {
  state = {
    userId: ''
  }
  render() {
    return (
      <div className="page page-my">
        <List renderHeader={() => 'Icon in the left'}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => { }}
          >My wallet</Item>
          <Link to={`/dream/detail/?id=${this.state.userId}`}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => { }}
              arrow="horizontal"
            >
              My Cost Ratio
            </Item>
          </Link>
        </List>
      </div >
    );
  }
  async componentDidMount() {
    const user = await post(Config.apiUrl + '/user/detail/');
    const userId = user.data.data.id;

    this.setState({
      userId: userId
    });
  }
}


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: data => {
      console.log(data);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(My));
