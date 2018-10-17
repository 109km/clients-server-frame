import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { ImagePicker, List, TextareaItem, Button, Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import { post, Config, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import CommentList from '../../../components/CommentList/CommentList';
import './detail.less';


class PostDetail extends Component {
  state = {
    title: "",
    content: "",
    user: null,
    comments: []
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
        <CommentList items={this.state.comments} />
        {this.state.user &&
          <div className="com-input-comment">
            <div className="container-input-comment">
              <img src={this.state.user.avatarUrl} alt="" />
              <TextareaItem
                className="textarea-input-comment"
                onChange={this.onCommentChange}
                ref={el => this.textareaEl = el}
                placeholder="输入留言"
                value={this.state.comment}
                rows={3}
                count={300}
              />
            </div>
            <WhiteSpace size="lg" />
            <Button className="btn-leave-comment" type="primary" size="sm" onClick={this.onCommentSubmit}>留言</Button>
          </div>
        }
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
  onCommentChange = (value) => {
    this.setState({
      comment: value
    });
  }
  onCommentSubmit = async () => {
    let query = getQuery(this.props.location.search);
    const formData = {
      postId: query.postId,
      content: this.state.comment
    }
    const response = await post(Config.apiUrl + '/comment/create', {
      data: formData
    });
    const result = response.data;

    if (result.code === 0) {
      console.log(result);
      let comments = this.state.comments;
      comments.push({
        avatarUrl: this.state.user.avatarUrl,
        nickname: this.state.user.nickname,
        date: result.data.createdAt,
        content: result.data.content
      });
      this.setState({
        comment: '',
        comments: comments
      });
    }
    else if (result.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(result.message, 3, () => {
        this.props.history.push({
          pathname: '/login',
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

export default PostDetail;
