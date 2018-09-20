import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import { List, InputItem, Button, WhiteSpace,Toast } from 'antd-mobile';
import { post } from '../../utils/api';
import Cookies from 'js-cookie';
import './login.less';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <div className="page page-edit">
        <List renderHeader={() => '输入用户名和密码'}>
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
        </List>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onSubmit}>提交</Button>
        <Toast />
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
  onSubmit = async (e) => {
    let formData = {
      username: this.state.username,
      password: this.state.password
    };
    const response = await post('http://127.0.0.1:7001/user/signin', {
      data: formData
    });
    const res = response.data;
    if (res.code === 0) {
      Cookies.set('sessionId', res.data.sessionId);
      this.props.history.push({
        pathname: 'edit'
      });
    }else{
      Toast.fail(`${res.message}`,1);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }



const LoginWrapper = createForm()(Login);

export default withRouter(LoginWrapper);
