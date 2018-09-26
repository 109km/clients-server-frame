import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, Icon } from 'antd-mobile';
import { post, getQuery, Config } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import InputTierList from '../../../components/InputTierList/InputTierList';
import './tier.less';

class DreamTier extends Component {
  state = {
    tiers: [{
      title: '',
      content: ''
    }]
  }
  render() {
    return (
      <div className="page page-tier-new">
        <InputTierList onUpdate={this.onUpdate} items={this.state.tiers} />
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onAdd}>新增回报</Button>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onSubmit}>下一步</Button>
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
    let tiers = this.state.tiers;
    tiers[index][type] = value;
    this.setState({
      tiers: tiers
    });
  }
  onAdd = async () => {
    let tiers = this.state.tiers;
    tiers.push({
      title: '',
      content: ''
    });
    this.setState({
      tiers: tiers
    });
  }
  onSubmit = async (e) => {
    let query = getQuery(this.props.location.search);
    let formData = {
      dreamId: query.dreamId,
      tiers: this.state.tiers
    };
    const res = await post(Config.apiUrl + '/dream/addTiers', {
      data: formData
    });

    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('Tier添加成功！', 3, () => {
        this.props.history.push({
          pathname: '/'
        });
      });
    } else if (res.data.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.data.message, 3, () => {
        this.props.history.push({
          pathname: '/user/signin',
        });
      });
    }
    else {
      Toast.fail(res.data.message);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamTier;
