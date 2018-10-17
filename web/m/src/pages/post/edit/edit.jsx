import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImagePicker, List, TextareaItem, Button } from 'antd-mobile';
import { post, getQuery, Config } from '../../../utils/util';
import './edit.less';

class PostEdit extends Component {
  state = {
    files: [],
    content: ""
  }
  render() {
    const { files } = this.state;
    return (
      <div className="page page-edit">
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
  async componentDidMount() {
    let query = getQuery(this.props.location.search);
    const res = await post(Config.apiUrl + '/post/detail', {
      data: {
        postId: query.postId
      }
    });
    console.log(res);
  }
  onFileChange(file) {
    let input = document.getElementById('file-picker');
  }
  onChange(files, type, index) {
    this.setState({
      files
    });
  }
  onTextChange(value) {
    this.setState({
      content: value
    });
  }
  async onSubmit(e) {
    let formData = new FormData();

    formData.append('content', this.state.content);
    this.state.files.forEach(file => {
      formData.append('pics[]', file.file);
    });
    const res = await post(Config.apiUrl + '/dream/edit', {
      data: formData
    });
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default PostEdit;
