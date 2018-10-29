import React, { Component } from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './account.less';
import { createForm } from 'rc-form';
import TopNav from '../../components/TopNav/TopNav';

class Account extends Component {
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (
      <div className="page page-account">
        <TopNav user={this.props.user} />

        <List
          renderHeader={() => '修改个人信息'}
        >
          <InputItem
            {...getFieldProps('nickname', {
              initialValue: this.props.user.nickname,
              rules: [
                { required: true, message: '输入新的昵称' },
                { validator: this.validateAccount },
              ],
            })}
            clear
            error={!!getFieldError('account')}
            onErrorClick={() => {
              alert(getFieldError('account').join('、'));
            }}
            placeholder="please input account"
          >昵称</InputItem>
        </List>
        {/* <SiteNav page="my" history={this.props.history} /> */}
      </div>
    );
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert('Validation failed');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('At least four characters for account'));
    }
  }
  componentDidMount() {

  }
}

export default createForm()(Account);