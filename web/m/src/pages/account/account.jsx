import React, { Component } from 'react';
import { List, InputItem, Button, ImagePicker, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './account.less';
import { createForm } from 'rc-form';
import TopNav from '../../components/TopNav/TopNav';
import ResultPage from '../../components/Result/Result';

const Item = List.Item;
class Account extends Component {
  state = {
    files: [],
    isResult: false,
    result: {
      title: '',
      message: ''
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div className="page page-account">
        <TopNav user={this.props.user} />
        {this.state.isResult ?
          <ResultPage result={this.state.result} />
          :
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
                  Toast.fail(getFieldError('nickname').join(''));
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
                type="password"
                clear
                error={!!getFieldError('oldPassword')}
                onErrorClick={() => {
                  Toast.fail(getFieldError('oldPassword').join(''));
                }}
                placeholder="输入旧密码"
              >旧密码</InputItem>

              <InputItem
                {...getFieldProps('newPassword', {
                  rules: [
                    { required: true, message: '输入新密码' },
                    { validator: this.validateNewPassword },
                  ],
                })}
                type="password"
                clear
                error={!!getFieldError('newPassword')}
                onErrorClick={() => {
                  Toast.fail(getFieldError('newPassword').join(''));
                }}
                placeholder="输入新密码"
              >新密码</InputItem>

              <InputItem
                {...getFieldProps('reNewPassword', {
                  rules: [
                    { required: true, message: '请再次输入密码' },
                    { validator: this.validateRePassword },
                  ],
                })}
                type="password"
                clear
                error={!!getFieldError('reNewPassword')}
                onErrorClick={() => {
                  Toast.fail(getFieldError('reNewPassword').join(''));
                }}
                placeholder="再次输入新密码"
              >确认新密码</InputItem>

              <Item>
                修改头像
              <img className="avatar" src={this.props.user.avatarUrl} alt="" />

                选择新头像
              <ImagePicker
                  files={this.state.files}
                  onChange={this.onChange}
                  selectable={this.state.files.length < 1}
                  onImageClick={(index, fs) => console.log(index, fs)}
                />
              </Item>
            </List>
            <Button type="primary" onClick={this.onSubmit}>确认</Button>
            <Button type="ghost" onClick={this.onReset}>取消</Button>
          </form>
        }
        {/* <SiteNav page="my" history={this.props.history} /> */}

      </div>
    );
  }
  onChange = async (files, type, index) => {
    this.setState({
      files,
    });
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, async (error) => {
      if (!error) {
        // Upload avatar file first
        let avatarFormData = new FormData();
        // avatarFormData.append('userId', this.props.user.id);
        console.log(this.state.files);

        avatarFormData.append('file', this.state.files[0].file);
        const avatarResponse = await post(Config.apiUrl + '/upload/single', {
          data: avatarFormData
        });

        this.setState({
          isResult: true,
          result:{
            title:'提交成功',
            message:'个人信息已修改成功！'
          }
        });
        setTimeout(()=>{
          this.props.history.push({
            pathname: '/my'
          });
        },2000);
        


      } else {
        Toast.fail('您有必选项未填写完毕。');
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
  validateNewPassword = (rule, value, callback) => {
    if (value && value.length >= 6) {
      callback();
    } else {
      callback(new Error('密码不能少于6位'));
    }
  }
  validateRePassword = (rule, value, callback) => {
    let newPassword = this.props.form.getFieldsValue()['newPassword'];
    if (newPassword === value) {
      callback();
    } else {
      callback(new Error('两次输入密码不同'));
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