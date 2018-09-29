import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { ImagePicker, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { post, Config, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import CommentList from '../../../components/CommentList/CommentList';
import './detail.less';


class PostDetail extends Component {
  state = {
    title: "",
    content: "",
    commentsList: [
      {
        userId: '1',
        comment: 'Hello',
        avatar: 'http://img.hb.aicdn.com/36a968bce1b1bec6c39e8d1db849538152e0e94b19ce3-8hBny6_fw658',
        nickname: 'King.Sword',
        date: '2018-09-10 22:22'
      },
      {
        userId: '2',
        comment: 'Hello',
        avatar: 'http://img.hb.aicdn.com/36a968bce1b1bec6c39e8d1db849538152e0e94b19ce3-8hBny6_fw658',
        nickname: 'LeooooPard',
        date: '2018-09-10 22:22'
      }
    ]
  }
  render() {
    return (
      <div className="page page-detail">
        <div className="title bold">
          {this.state.title}
        </div>
        <div className="content">
          {ReactHtmlParser(this.state.content)}
        </div>
        <CommentList items={this.state.commentsList} />
      </div>
    );
  }
  async componentDidMount() {
    const postId = getQuery(this.props.location.search)['postId'];
    const res = await post(Config.apiUrl + '/post/detail', {
      data: {
        postId: postId
      }
    });
    const postDetail = res.data;
    console.log(postDetail);
    if (postDetail.code === STATUS_CODE['SUCCESS'].code) {

      this.setState(postDetail.data);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default PostDetail;
