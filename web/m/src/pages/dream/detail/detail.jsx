import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag, Toast, WhiteSpace, Icon, Button } from 'antd-mobile';
import { post, getQuery, filterHTML } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import PostList from '../../../components/PostList/PostList';
import './detail.less';

class DreamDetail extends Component {
  state = {
    title: "",
    content: "",
    category: "视频",
    cover: "http://img.hb.aicdn.com/09b9379c464e0d394d5a4c26aa4380e9106e48015b4c3-lrqGkA_fw658",
    avatarUrl: "http://img.hb.aicdn.com/36a968bce1b1bec6c39e8d1db849538152e0e94b19ce3-8hBny6_fw658",
    nickname: "阿信",
    backersNum: 200,
    goalsList: [],
    tiersList: [],
    postsList: []
  }
  render() {

    let backgroundCover = {
      backgroundImage: 'url(' + this.state.cover + ')'
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
              <Button className="btn-action" type="primary" inline size="small">+ 关注</Button>
              <Button className="btn-action" type="primary" inline size="small">+ 分享</Button>
            </div>
          </div>
          <div className="posts-list">
            <PostList items={this.state.postsList} nickname={this.state.nickname} avatar={this.state.avatarUrl} />
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let query = getQuery(this.props.location.search);
    const response = await post('http://127.0.0.1:7001/dream/detail', {
      data: query
    });
    let result = response.data;
    let data = result.data;
    if (result.code === STATUS_CODE['SUCCESS'].code) {
      data.tiersList = data.tiersList ? JSON.parse(data.tiersList) : data.tiersList;
      data.goalsList = data.goalsList ? JSON.parse(data.goalsList) : data.goalsList;
      data.postsList = data.postsList ? JSON.parse(data.postsList) : data.postsList;
      console.log(data);
      this.setState({
        nickname: data.user.nickname,
        avatarUrl: data.user.avatarUrl,
        userId: data.userId,
        title: data.title,
        content: data.content,
        tiersList: data.tiersList,
        goalsList: data.goalsList,
        postsList: data.posts
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
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamDetail;
