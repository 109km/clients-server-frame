import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { post, getQuery, Config } from '../../utils/util';
import Cookies from 'js-cookie';
import './login.less';
import STATUS_CODE from '../../utils/statusCode';

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
    let query = getQuery(this.props.location.search);
    let redirectUrl = query['r'] && decodeURIComponent(query['r']);
    let jumpUrl = '/';
    if (redirectUrl) {
      jumpUrl = redirectUrl;
    }
    const response = await post(Config.apiUrl + '/user/signin', {
      data: formData
    });
    const res = response.data;
    if (res.code === STATUS_CODE['SUCCESS'].code) {
      Cookies.set('sessionId', res.data.sessionId);
      this.props.history.push({
        pathname: jumpUrl
      });
    } else {
      Toast.fail(`${res.message}`, 1);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }



const LoginWrapper = createForm()(Login);

export default withRouter(LoginWrapper);
