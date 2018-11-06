import React, { Component } from 'react';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace } from 'antd-mobile';
import { post, Config } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import './edit.less';

class DreamEdit extends Component {
  state = {
    title: "",
    content: ""
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
          </List>
          <WhiteSpace size="lg" />
          <Button type="primary" onClick={this.onSubmit}>下一步</Button>
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
  onSubmit = async (e) => {
    let formData = {
      title: this.state.title,
      content: this.state.content
    };
    const res = await post(Config.apiUrl + '/dream/update', {
      data: formData
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('项目修改成功！', 3, () => {
        this.props.history.push({
          pathname: "/dream/goal"
        });
      });
    } else if (res.data.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.data.message, 3, () => {
        this.props.history.push({
          pathname: "/login",
        });
      });
    }
    else {
      Toast.fail(res.data.message);
    }
  }
  async componentDidMount() {
    const res = await this.props.getDreamDetail();
    let dream = res.dream;
    if (dream.error) {
      if (dream.error.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
        Toast.fail(dream.error.message, 3, () => {
          this.props.history.push({
            pathname: '/login',
            search: `?r=${encodeURIComponent(this.props.location.pathname + this.props.location.search)}`
          });
        });
      }
    }else{
      this.setState(dream);
    }
  }
}
export default DreamEdit;
