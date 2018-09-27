import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag, Toast, WhiteSpace, Icon, Button } from 'antd-mobile';
import { post, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import PostList from '../../../components/PostList/PostList';
import './detail.less';

class DreamDetail extends Component {
  state = {
    title: "",
    content: "",
    introduction: "这是一款5-6人玩了就会疯狂上瘾的游戏。",
    category: "视频",
    cover: "http://img.hb.aicdn.com/09b9379c464e0d394d5a4c26aa4380e9106e48015b4c3-lrqGkA_fw658",
    avatar: "http://img.hb.aicdn.com/36a968bce1b1bec6c39e8d1db849538152e0e94b19ce3-8hBny6_fw658",
    nickname: "阿信",
    backersNum: 200,
    goalsList: [],
    tiersList: [],
    postsList: [{
      title: '欢迎大家',
      author: '阿信',
      date: '09-25 19:30',
      avatar: 'http://img.hb.aicdn.com/36a968bce1b1bec6c39e8d1db849538152e0e94b19ce3-8hBny6_fw658',
      content: '第一篇文章'
    }, {
      title: '欢迎大家',
      author: '捞岛',
      date: '09-25 20:30',
      avatar: 'http://img.hb.aicdn.com/36a968bce1b1bec6c39e8d1db849538152e0e94b19ce3-8hBny6_fw658',
      content: '第二篇文章'
    }]
  }
  render() {

    let backgroundCover = {
      backgroundImage: 'url(' + this.state.cover + ')'
    }

    return (
      <div className="page page-dream-detail">
        <div className="user-info">
          <div className="cover" style={backgroundCover}></div>
          <img className="avatar" src={this.state.avatar} alt="" />
          <div className="user-desc">
            <span className="nickname">{this.state.nickname}</span>
            &nbsp;
            正在创作{this.state.category}
          </div>
          <div className="introduction">
            {this.state.introduction}
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
            <PostList items={this.state.postsList} />
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
      this.setState({
        title: data.title,
        content: data.content,
        tiersList: data.tiersList,
        goalsList: data.goalsList
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
