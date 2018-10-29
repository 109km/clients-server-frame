import React, { Component } from 'react';
import { List, InputItem, Button, ImagePicker } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './account.less';
import { createForm } from 'rc-form';
import TopNav from '../../components/TopNav/TopNav';

const Item = List.Item;
class Account extends Component {
  state = {
    files: []
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (
      <div className="page page-account">
        <TopNav user={this.props.user} />
        <form>
          <List
            renderHeader={() => '修改个人信息'}
          >
            <InputItem
              {...getFieldProps('nickname', {
                initialValue: this.props.user.nickname,
                rules: [
                  { required: true, message: '输入昵称' },
                  { validator: this.validateAccount },
                ],
              })}
              clear
              error={!!getFieldError('nickname')}
              onErrorClick={() => {
                alert(getFieldError('nickname').join('、'));
              }}
              placeholder="请输入新的昵称"
            >昵称</InputItem>

            <InputItem
              {...getFieldProps('oldPassword', {
                rules: [
                  { required: true, message: '输入旧密码' },
                  { validator: this.validatePassword },
                ],
              })}
              clear
              error={!!getFieldError('oldPassword')}
              onErrorClick={() => {
                alert(getFieldError('oldPassword').join('、'));
              }}
              placeholder="输入旧密码"
            >旧密码</InputItem>

            <InputItem
              {...getFieldProps('newPassword', {
                rules: [
                  { required: true, message: '输入新密码' },
                  { validator: this.validatePassword },
                ],
              })}
              clear
              error={!!getFieldError('newPassword')}
              onErrorClick={() => {
                alert(getFieldError('newPassword').join('、'));
              }}
              placeholder="输入新密码"
            >新密码</InputItem>

            <InputItem
              {...getFieldProps('reNewPassword', {
                rules: [
                  { required: true, message: '请再次输入密码' },
                  { validator: this.validatePassword },
                ],
              })}
              clear
              error={!!getFieldError('reNewPassword')}
              onErrorClick={() => {
                alert(getFieldError('reNewPassword').join('、'));
              }}
              placeholder="再次输入新密码"
            >确认新密码</InputItem>

            <Item>
              <img className="avatar" src={this.props.user.avatarUrl} alt="" />

              <ImagePicker
                files={this.state.files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
              />
            </Item>
          </List>
          <Button type="primary">确认</Button>
          <Button type="ghost">取消</Button>
        </form>
        {/* <SiteNav page="my" history={this.props.history} /> */}
      </div>
    );
  }
  onChange = (files, type, index) => {
    console.log(files);
    this.setState({
      files,
    });
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
    if (value && value.length > 1) {
      callback();
    } else {
      callback(new Error('用户名不能少于2个字'));
    }
  }
  async componentDidMount() {
    const userData = await post(Config.apiUrl + '/user/detail/');
    const user = userData.data;
    if (user.code === STATUS_CODE['SUCCESS'].code) {
      this.props.setUserInfo(user.data);
    }
  }
}

export default createForm()(Account);