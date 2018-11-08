import React, { Component } from 'react';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, ImagePicker } from 'antd-mobile';
import STATUS_CODE from '../../../utils/statusCode';
import './new.less';


const Item = List.Item;
class DreamNew extends Component {
  state = {
    files: [],
    title: "",
    content: ""
  }
  render() {
    return (
      <div className="page page-dream-new">

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
          <WhiteSpace size="lg" />

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
  onCoverChange = (files) => {
    this.setState({
      files
    });
  }
  onSubmit = async (e) => {
    let formData = {
      title: this.state.title,
      content: this.state.content
    };

    const res = await this.props.createNewDream(formData);
    console.log(res);
    if (res.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('项目创建成功！', 3, () => {
        this.props.history.push({
          pathname: "/dream/goal"
        });
      });
    } else if (res.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.message, 3, () => {
        this.props.history.push({
          pathname: "/login"
        });
      });
    }
    else {
      Toast.fail(res.message);
    }
  }
  async componentDidMount() {

  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamNew;
