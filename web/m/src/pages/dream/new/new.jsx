import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace } from 'antd-mobile';
import { post } from '../../../utils/util';
import './new.less';

class PostNew extends Component {
  state = {
    files: [],
    content: ""
  }
  render() {
    return (
      <div className="page page-dream-new">
        <form method="POST">
          <List>
            <InputItem
              placeholder="项目的标题"
              value={this.state.content}
              onChange={this.onTitleChange}
            />
            <TextareaItem
              rows={10}
              placeholder="描述一下项目"
              value={this.state.content}
              onChange={this.onDescChange}
            />
            <TextareaItem
              rows={10}
              placeholder="描述一下项目"
              value={this.state.content}
              onChange={this.onDescChange}
            />

          </List>
          <WhiteSpace size="lg" />
          <Button type="primary" onClick={this.onSubmit}>提交</Button>
        </form>
      </div>
    );
  }
  onTitleChange = (value) => {
    this.setState({
      title: value
    });
  }
  onDescChange = (value) => {
    this.setState({
      desc: value
    });
  }
  onSubmit = async (e) => {
    let formData = new FormData();
    formData.append('desc', this.state.desc);
    formData.append('title', this.state.title);
    const res = await post('http://127.0.0.1:7001/dream/create', {
      data: formData
    });
    if (res.data.code === 0) {
      Toast.success('项目创建成功！');
    } else {
      Toast.fail(res.data.message);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default PostNew;
