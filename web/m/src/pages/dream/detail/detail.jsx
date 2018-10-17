import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag, Toast, WhiteSpace, Icon, Button, SegmentedControl } from 'antd-mobile';
import { post, getQuery, filterHTML,Config } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import PostList from '../../../components/PostList/PostList';
import TierList from '../../../components/TierList/TierList';
import './detail.less';

class DreamDetail extends Component {
  state = {
    isFollowed: false,
    isShowPost: true,
    title: "",
    content: "",
    category: "视频",
    coverUrl: "",
    avatarUrl: "",
    nickname: "阿信",
    backersNum: 200,
    goalsList: [],
    tiersList: [],
    postsList: []
  }
  render() {

    let backgroundCover = {
      backgroundImage: 'url(' + this.state.coverUrl + ')'
    }

    return (
      <div className="page page-dream-detail">
        <div className="user-info">
          <div className="cover" style={backgroundCover}></div>
          <img className="avatar" src={this.state.avatarUrl} alt="" />
          <div className="user-desc">
            <span className="nickname">{this.state.nickname}</span>
          </div>
          <div className="title">
            {this.state.title}
          </div>
          <div className="introduction">
            {this.state.content}
          </div>
        </div>
        <div className="container">
          <div className="backers-info">
            <div className="backers-show">
              <span className="num">{this.state.backersNum}</span>支持者
            </div>
            <div className="actions-sheet">
              <Button className={this.state.isFollowed ? 'btn-action btn-action-followed' : 'btn-action'} type="primary" inline size="small" onClick={this.onFollow}>{this.state.isFollowed ? '已关注' : '+ 关注'}</Button>
              <Button className="btn-action" type="primary" inline size="small">+ 分享</Button>
            </div>
          </div>
          <div className="tabs">
            <SegmentedControl values={['文章', '回报']} onChange={this.onChangeTab} />
          </div>
          {this.state.isShowPost ?
            <div className="posts-list">
              <PostList items={this.state.postsList} nickname={this.state.nickname} avatar={this.state.avatarUrl} />
            </div>
            :
            <div className="tiers-list">
              <TierList items={this.state.tiersList} />
            </div>
          }
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let query = getQuery(this.props.location.search);
    const response = await post(Config.apiUrl + '/dream/detail', {
      data: query
    });
    let result = response.data;
    let data = result.data;
    if (result.code === STATUS_CODE['SUCCESS'].code) {
      data.tiersList = data.tiersList ? JSON.parse(data.tiersList) : data.tiersList;
      data.goalsList = data.goalsList ? JSON.parse(data.goalsList) : data.goalsList;
      data.postsList = data.postsList ? JSON.parse(data.postsList) : data.postsList;
      this.setState({
        nickname: data.user.nickname,
        avatarUrl: data.user.avatarUrl,
        userId: data.userId,
        title: data.title,
        content: data.content,
        tiersList: data.tiersList,
        goalsList: data.goalsList,
        postsList: data.posts,
        coverUrl: data.coverUrl
      });
    } else if (result.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(result.message, 3, () => {
        this.props.history.push({
          pathname: '/user/signin',
        });
      });
    }
    else {
      Toast.fail(result.message);
    }

    const followersRes = await post(Config.apiUrl + '/follower/find', {
      data: {
        followerId: this.state.userId
      }
    });
    const followersData = followersRes.data;
    if (followersData.code === STATUS_CODE['SUCCESS'].code && followersData.data.length > 0) {
      this.setState({
        isFollowed: true
      });
    }

  }
  onFollow = async () => {
    let params = {
      followerId: this.state.userId
    };
    let action = '';

    if (this.state.isFollowed) {
      action = 'remove';
    } else {
      action = 'add';
    }
    const res = await post(`http://127.0.0.1:7001/follower/${action}`, {
      data: params
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      this.setState({
        isFollowed: action === 'add' ? true : false
      });
    }
    else if (res.data.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.data.message, 3, () => {
        this.props.history.push({
          pathname: '/login',
          search: `?r=${encodeURIComponent(this.props.location.pathname + this.props.location.search)}`
        });
      });
    }
    else {
      Toast.fail(res.data.message);
    }
  }
  onChangeTab = (e) => {
    let index = e.nativeEvent.selectedSegmentIndex;
    if (index === 0) {
      this.setState({
        isShowPost: true
      })
    } else {
      this.setState({
        isShowPost: false
      })
    }

  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamDetail;
