import React, { Component } from 'react';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, ImagePicker } from 'antd-mobile';
import { post, Config } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import './edit.less';
const Item = List.Item;
class DreamEdit extends Component {
  state = {
    title: "",
    content: "",
    files: [],
    coverUrl: '',
    mode: 'new'
  }
  render() {
    return (
      <div className="page page-dream-edit">

        <form method="POST">
          <List>
            <InputItem
              placeholder="项目的标题"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
            <TextareaItem
              rows={8}
              placeholder="描述一下项目"
              value={this.state.content}
              onChange={this.onDescChange}
            />
            <Item>
              选择主页封面
              <ImagePicker
                files={this.state.files}
                onChange={this.onCoverChange}
                selectable={this.state.files.length < 1}
              />
            </Item>
          </List>
          <div className="current-cover-container">
            <img className="cover-img" src={this.state.coverUrl} alt="" />
          </div>
          <div className="button-area">
            <Button type="primary" onClick={this.onSubmit}>下一步</Button>
          </div>
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
      content: value
    });
  }
  onCoverChange = async (files) => {
    this.setState({
      files
    });

    if (files && files[0]) {
      let uploadData = new FormData();
      uploadData.append('file', this.state.files[0].file);
      const res = await post(Config.apiUrl + '/upload/single', {
        data: uploadData
      });
      if (res.data.code === STATUS_CODE['SUCCESS'].code) {
        this.setState({
          coverUrl: res.data.data.url
        });
      }

    }

  }
  onSubmit = async (e) => {
    let formData = {
      title: this.state.title,
      content: this.state.content,
      coverUrl: this.state.coverUrl
    };
    const res = await this.props.updateDreamDetail(formData);
    if (res.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('项目修改成功！', 3, () => {
        this.props.history.push({
          pathname: "/dream/goal"
        });
      });
    } else if (res.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.message, 3, () => {
        this.props.history.push({
          pathname: "/login",
        });
      });
    }
    else {
      Toast.fail(res.message);
    }
  }
  async componentDidMount() {
    const res = await this.props.getDreamDetail();
    console.log(res);
    if (res.code !== STATUS_CODE['SUCCESS'].code) {
      if (res.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
        Toast.fail(res.message, Config.toastDuration, () => {
          this.props.history.push({
            pathname: '/login',
            search: `?r=${encodeURIComponent(this.props.location.pathname + this.props.location.search)}`
          });
        });
      } else {
        Toast.fail(res.message, Config.toastDuration);
      }
    } else {
      this.setState(res.data);
      this.setState({
        mode: 'edit'
      });
    }
  }
}
export default DreamEdit;
