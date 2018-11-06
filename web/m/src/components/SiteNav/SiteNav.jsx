import React, { Component } from 'react';
import { Button, TabBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

import './SiteNav.less';

class SiteNav extends Component {
  state = {
    page: '',
    cdnUrl: Config.cdnUrl,
    hidden: false,
    iconSize: 26,
  }
  onTabSelected = (val) => {
    let path = "/";
    if (val !== 'home') {
      path = path + val;
    }
    this.props.history.push({
      pathname: path
    });
  }
  render() {

    let iconStyle = ` center center / ${this.state.iconSize}px  ${this.state.iconSize}px no-repeat`;

    return (
      <div className="com-site-nav">
        <TabBar
          unselectedTintColor="#cbcbcb"
          tintColor="#f36838"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: `${this.state.iconSize}px`,
              height: `${this.state.iconSize}px`,
              background: `url(${this.state.cdnUrl}/icon-home.png) ${iconStyle}`
            }}
            />
            }
            selectedIcon={<div style={{
              width: `${this.state.iconSize}px`,
              height: `${this.state.iconSize}px`,
              background: `url(${this.state.cdnUrl}/icon-home-actived.png) ${iconStyle}`
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
                width: `${this.state.iconSize}px`,
                height: `${this.state.iconSize}px`,
                background: `url(${this.state.cdnUrl}/icon-you-edit.png) ${iconStyle}`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: `${this.state.iconSize}px`,
                height: `${this.state.iconSize}px`,
                background: `url(${this.state.cdnUrl}/icon-you-edit-actived.png) ${iconStyle}`
              }}
              />
            }
            title="我的项目"
            key="dream"
            // badge={'new'}
            selected={this.props.page === 'dream'}
            onPress={() => { this.onTabSelected('dream/detail') }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: `${this.state.iconSize}px`,
                height: `${this.state.iconSize}px`,
                background: `url(${this.state.cdnUrl}/icon-search.png) ${iconStyle}`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: `${this.state.iconSize}px`,
                height: `${this.state.iconSize}px`,
                background: `url(${this.state.cdnUrl}/icon-search-actived.png) ${iconStyle}`
              }}
              />
            }
            title="探索"
            key="explore"
            // badge={'new'}
            selected={this.props.page === 'explore'}
            onPress={() => { this.onTabSelected('explore') }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: `${this.state.iconSize}px`,
                height: `${this.state.iconSize}px`,
                background: `url(${this.state.cdnUrl}/icon-user.png) ${iconStyle}`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: `${this.state.iconSize}px`,
                height: `${this.state.iconSize}px`,
                background: `url(${this.state.cdnUrl}/icon-user-actived.png) ${iconStyle}`
              }}
              />
            }
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