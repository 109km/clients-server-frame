import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImagePicker, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { post } from '../../../utils/util';
import './new.less';

class PostNew extends Component {
  state = {
    files: [],
    content: ""
  }
  render() {
    const { files } = this.state;
    return (
      <div className="page page-new">
        <form method="POST">
          <List>
            <TextareaItem
              rows={10}
              placeholder="输入点啥"
              value={this.state.content}
              onChange={this.onTextChange}
            />
          </List>
          <ImagePicker
            length="3"
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
          />
          <Button type="primary" onClick={this.onSubmit}>提交</Button>
        </form>
      </div>
    );
  }
  onFileChange = (file) => {
    let input = document.getElementById('file-picker');
  }
  onChange = (files, type, index) => {
    this.setState({
      files
    });
  }
  onTextChange = (value) => {
    this.setState({
      content: value
    });
  }
  onSubmit = async (e) => {
    let formData = new FormData();
    formData.append('content', this.state.content);
    this.state.files.forEach(file => {
      formData.append('pics[]', file.file);
    });
    const res = await post('http://127.0.0.1:7001/post/create', {
      data: formData
    });
    if (res.data.code === 0) {
      Toast.success('文章创建成功！');
    } else {
      Toast.fail(res.data.message);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default PostNew;
