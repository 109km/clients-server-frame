import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { post, Config } from '../../utils/util';
import './signup.less';

class Signup extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <div className="page page-signup">
        <List renderHeader={() => '注册新用户'}>
          <InputItem
            onChange={this.onUsernameChange}
            value={this.state.username}
          >
            用户名
          </InputItem>
          <InputItem
            onChange={this.onPasswordChange}
            value={this.state.password}
            type="password"
          >
            密码
          </InputItem>
          <InputItem
            onChange={this.onRePasswordChange}
            value={this.state.repassword}
            type="password"
          >
            确认密码
          </InputItem>
        </List>
        <WhiteSpace size="lg" />
        <div className="button-area">
          <Button type="primary" onClick={this.onSubmit}>提交</Button>
        </div>
      </div>
    );
  }
  onUsernameChange = async (value) => {
    this.setState({
      username: value
    });
  }
  onPasswordChange = async (value) => {
    this.setState({
      password: value
    });
  }
  onRePasswordChange = async (value) => {
    this.setState({
      repassword: value
    });
  }
  onSubmit = async (e) => {
    let formData = {
      username: this.state.username,
      password: this.state.password,
      're-password': this.state.repassword
    };
    const response = await post(Config.apiUrl + '/user/create', {
      data: formData
    });

    // const result = await response.json();
    const res = response.data;
    if (res.code === 0) {
      this.props.history.push({
        pathname: "/login"
      });
    } else {
      Toast.fail(`${res.message}`);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }



const SignupWrapper = createForm()(Signup);

export default withRouter(SignupWrapper);
