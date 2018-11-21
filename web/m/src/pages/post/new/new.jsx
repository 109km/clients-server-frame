import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImagePicker, List, TextareaItem, Button, Toast } from 'antd-mobile';
import STATUS_CODE from '../../../utils/statusCode';
import { post, getQuery, Config } from '../../../utils/util';
import './new.less';

class PostNew extends Component {
  state = {
    files: [],
    title: "",
    content: ""
  }
  render() {
    const { files } = this.state;
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ]
    }
    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]
    return (
      <div className="page page-post-new">
        {/* <form method="POST">
          <List>
            
          </List>
          <ImagePicker
            length="3"
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
          />
          <Button type="primary" onClick={this.onSubmit}>提交</Button>
        </form> */}
        <TextareaItem
          className="title"
          rows={1}
          placeholder="文章标题"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <ReactQuill value={this.state.content}
          className="rich-editor"
          onChange={this.onTextChange}
          modules={modules}
          formats={formats}
          placeholder="输入正文"
        >
        </ReactQuill>

        <Button className="btn-submit" type="primary" onClick={this.onSubmit}>提交</Button>
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
  onTitleChange = (value) => {
    this.setState({
      title: value
    });
  }
  onTextChange = (value) => {
    this.setState({
      content: value
    });
  }
  onSubmit = async (e) => {
    let dreamId = getQuery(this.props.location.search)['dreamId'];
    let formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('content', this.state.content);
    dreamId && formData.append('dreamId', dreamId);
    // this.state.files.forEach(file => {
    //   formData.append('pics[]', file.file);
    // });
    const res = await post(Config.apiUrl + '/post/create', {
      data: formData
    });
    const result = res.data;
    if (result.code === 0) {
      Toast.success('文章创建成功！', Config.toastDuration, () => {
        this.props.history.push({
          pathname: "/post/detail?postId=" + result.data.id,
        });
      });

    } else if (result.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(result.message, Config.toastDuration, () => {
        this.props.history.push({
          pathname: "/login",
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

export default PostNew;
