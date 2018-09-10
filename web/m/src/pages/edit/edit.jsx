import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImagePicker, List, TextareaItem, Button } from 'antd-mobile';
import './edit.less';


const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
class Edit extends Component {
  state = {
    files: data
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
            />
          </List>
          <ImagePicker
            length="3"
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
            onAddImageClick={this.onAddImageClick}
          />
          <Button type="primary">提交</Button>
        </form>
      </div>
    );
  }
  onChange = (files, type, index) => {
    this.setState({
      files
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
  };
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default Edit;
