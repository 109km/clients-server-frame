import React, { Component } from 'react';
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
        <input id="file-picker" type="file" onChange={this.onFileChange} />
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
    console.log(input.files);
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
  onAddImageClick = (e) => {
    e.preventDefault();
    this.setState({
      files: this.state.files.concat({
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '3',
      }),
    });
  }
  onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(this.state.files[0]);
    formData.append('content', this.state.content);
    formData.append('pics', this.state.files[0].file, 'pic01.jpg');
    // formData.append('pics[]', this.state.files[1].url, 'pic02.jpg');
    console.log(formData.getAll('content'),formData.getAll('pics'));
    const res = await fetch('http://127.0.0.1:7001/upload/', {
      body: formData,
      method: 'POST'
    });
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default Edit;
