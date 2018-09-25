import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, Icon } from 'antd-mobile';
import { post, getQuery } from '../../../utils/util';
import GoalList from '../../../components/GoalList/GoalList';
import './goal.less';

class DreamGoal extends Component {
  state = {
    goals: [{
      title: "",
      content: ""
    }],
  }
  render() {
    return (
      <div className="page page-dream-new">
        <GoalList items={this.state.goals}/>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onAdd}>新增目标</Button>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onSubmit}>下一步</Button>
      </div>
    );
  }
  onTitleChange = (value, index) => {

    this.setState({
      title: value
    });
  }
  onDescChange = (value, index) => {
    this.setState({
      desc: value
    });
  }
  onAdd = async (value) => {

    let goals = this.state.goals;
    console.log(goals);
    goals.push({
      title: '',
      content: ''
    });
    this.setState({
      goals: goals
    });
  }
  onSubmit = async (e) => {
    let query = getQuery(this.props.location.search);
    let dreamId = query.dreamId;
    let formData = new FormData();
    formData.append('dreamId', dreamId);
    formData.append('desc', this.state.desc);
    formData.append('title', this.state.title);
    const res = await post('http://127.0.0.1:7001/dream/goal', {
      data: formData
    });
    if (res.data.code === 0) {
      Toast.success('目标创建成功！');
    } else {
      Toast.fail(res.data.message);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamGoal;
