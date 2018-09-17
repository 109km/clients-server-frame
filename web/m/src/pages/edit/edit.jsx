import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ImagePicker, List, TextareaItem, Button } from 'antd-mobile';
import './edit.less';

class Edit extends Component {
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
  onFileChange = (file) => {
    let input = document.getElementById('file-picker');
  }
  onChange = (files, type, index) => {
    console.log(files);
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
    const res = await fetch('http://127.0.0.1:7001/dream/create', {
      body: formData,
      method: 'POST'
    });
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default Edit;
