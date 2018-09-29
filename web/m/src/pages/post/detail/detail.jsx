import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { ImagePicker, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { post, Config, getQuery } from '../../../utils/util';
import './detail.less';
import STATUS_CODE from '../../../utils/statusCode';

class PostDetail extends Component {
  state = {
    title: "",
    content: ""
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
