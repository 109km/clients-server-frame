import React, { Component } from 'react';
import { Button, TabBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

import './SiteNav.less';

class SiteNav extends Component {
  state = {
    page: '',
    hidden: false
  }
  onTabSelected = (val) => {
    let path = '/';
    if (val !== 'home') {
      path = path + val;
    }
    this.props.history.push({
      pathname: path
    });
  }
  render() {
    return (
      <div className="com-site-nav">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: ' 26px',
              height: ' 26px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /   25px  25px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: ' 26px',
              height: ' 26px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /   25px  25px no-repeat'
            }}
            />
            }
            selected={this.props.page === 'home'}
            // badge={1}
            onPress={() => { this.onTabSelected('home') }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: ' 26px',
                height: ' 26px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /   25px  25px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: ' 26px',
                height: ' 26px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /   25px  25px no-repeat'
              }}
              />
            }
            title="热门"
            key="hot"
            // badge={'new'}
            selected={this.props.page === 'hot'}
            onPress={() => { this.onTabSelected('hot') }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.props.page === 'my'}
            onPress={() => { this.onTabSelected('my') }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount', this.props.page);
  }
}

export default SiteNav;