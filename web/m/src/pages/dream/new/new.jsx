import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, Icon } from 'antd-mobile';
import { post, Config } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import './new.less';

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
  onSubmit = async (e) => {
    let formData = {
      title: this.state.title,
      content: this.state.content
    };

    const res = await post(Config.apiUrl + '/dream/create', {
      data: formData
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('项目创建成功！', 3, () => {
        this.props.history.push({
          pathname: "/dream/goal"
        });
      });
    } else if (res.data.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.data.message, 3, () => {
        this.props.history.push({
          pathname: "/login"
        });
      });
    }
    else {
      Toast.fail(res.data.message);
    }
  }
  componentDidMount() {
    
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamNew;
