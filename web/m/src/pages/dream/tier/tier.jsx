import React, { Component } from 'react';
import { Button, Toast, WhiteSpace } from 'antd-mobile';
import { post, Config, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import InputTierList from '../../../components/InputTierList/InputTierList';
import './tier.less';

class DreamTier extends Component {
  state = {
    tiersList: [{
      title: '',
      content: ''
    }]
  }
  render() {
    return (
      <div className="page page-dream-tier">
        <InputTierList onUpdate={this.onUpdate} items={this.state.tiersList} />
        <WhiteSpace size="lg" />
        <div className="button-area">
          <Button type="primary" onClick={this.onAdd}>新增回报</Button>
          <WhiteSpace size="lg" />
          <Button type="primary" onClick={this.onSubmit}>下一步</Button>
        </div>
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
  onUpdate = (type, value, index) => {
    let tiers = this.state.tiersList;
    tiers[index][type] = value;
    this.setState({
      tiers: tiers
    });
  }
  onAdd = async () => {
    let tiers = this.state.tiersList;
    tiers.push({
      title: '',
      content: ''
    });
    this.setState({
      tiersList: tiers
    });
  }
  onSubmit = async (e) => {
    let formData = {
      tiers: this.state.tiersList
    };
    const res = await this.props.updateDreamDetail(formData);
    if (res.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('回报添加成功！', 3, () => {
        this.props.history.push({
          pathname: "/dream/detail"
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
    await this.props.getDreamDetail();
    const dream = this.props.dream;
    const user = this.props.user;
    this.setState({
      tiersList: JSON.parse(dream.tiersList)
    });
  }
}
export default DreamTier;
