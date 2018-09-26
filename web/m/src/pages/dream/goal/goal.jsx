import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, Icon } from 'antd-mobile';
import { post, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import GoalList from '../../../components/GoalList/GoalList';
import './goal.less';

class DreamGoal extends Component {
  state = {
    goals: [{
      title: "",
      content: ""
    }]
  }
  render() {
    return (
      <div className="page page-dream-new">
        <GoalList onUpdate={this.onUpdate} items={this.state.goals} />
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onAdd}>新增目标</Button>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={this.onSubmit}>下一步</Button>
      </div>
    );
  }
  onUpdate = (type, value, index) => {
    console.log('Goal:', type, value, index);
    let goals = this.state.goals;
    goals[index][type] = value;
    this.setState({
      goals: goals
    });
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
  onAdd = async () => {
    let goals = this.state.goals;
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
    let formData = {
      dreamId: query.dreamId,
      goals: this.state.goals
    };
    const res = await post('http://127.0.0.1:7001/dream/addGoals', {
      data: formData
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('目标创建成功！');
    }
    else if (res.data.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.data.message, 3, () => {
        this.props.history.push({
          pathname: 'login'
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

export default DreamGoal;
