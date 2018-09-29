import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { ImagePicker, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { post, Config, getQuery } from '../../../utils/util';
import './detail.less';
import STATUS_CODE from '../../../utils/statusCode';

class PostDetail extends Component {
  state = {
    title: "红旗遮住眼",
    content: "<img src='https://c10.patreonusercontent.com/3/eyJ3IjoxMjQwfQ%3D%3D/patreon-media/p/post/21630112/09a00751a9ea464988d5e54ff762fc8d/1?token-time=1539388800&token-hash=ONYkXfTs5yKXaWQN_hPOfdceWk8WOQzhH-0AwQ3CZIQ%3D'/><p>那天卡洛斯的接口发了<p/><p>破蒲葵与啊啥地方<p/>"
  }
  render() {
    return (
      <div className="page">
        <div className="title">
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
