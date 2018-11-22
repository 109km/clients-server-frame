import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { TextareaItem, Button, Toast, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, Config, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import CommentList from '../../../components/CommentList/CommentList';
import './detail.less';


class PostDetail extends Component {
  state = {
    title: "",
    content: "",
    user: {},
    comments: []
  }
  render() {
    return (
      <div className="page page-post-detail">
        <div className="title bold">
          {this.state.title}
        </div>
        <div className="author">
          <img className="avatar" src={this.state.user.avatarUrl} />
          <div className="nickname">
            <Link to={"/dream/detail?dreamId=" + this.state.dreamId}>
              {this.state.user.nickname}
            </Link>
          </div>
          <div className="date">
            {this.state.createdAt}
          </div>
        </div>
        <div className="content">
          {ReactHtmlParser(this.state.content)}
        </div>
        <div className="comment-list">
          <CommentList items={this.state.comments} />
        </div>
        {this.state.user && this.state.user.nickname &&
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
      postDetail.data.createdAt = postDetail.data.createdAt.split('T')[0];
      this.setState(postDetail.data);
    }

    console.log(this.state);
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
