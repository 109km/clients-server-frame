import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, Icon } from 'antd-mobile';
import { post, getQuery, Config } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import InputGoalList from '../../../components/InputGoalList/InputGoalList';
import './goal.less';

class DreamGoal extends Component {
  state = {
    goalsList: [{
      title: "",
      content: ""
    }]
  }
  render() {
    return (
      <div className="page page-dream-goal">
        <InputGoalList onUpdate={this.onUpdate} items={this.state.goalsList} />
        <WhiteSpace size="lg" />
        <div className="button-area">
          <Button type="primary" onClick={this.onAdd}>新增目标</Button>
          <WhiteSpace size="lg" />
          <Button type="primary" onClick={this.onSubmit}>下一步</Button>
        </div>
      </div>
    );
  }
  onUpdate = (type, value, index) => {
    console.log('Goal:', type, value, index);
    let goals = this.state.goalsList;
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
    let goals = this.state.goalsList;
    goals.push({
      title: '',
      content: ''
    });
    this.setState({
      goalsList: goals
    });
  }
  onSubmit = async (e) => {
    let formData = {
      goalsList: this.state.goalsList
    };
    const res = await this.props.updateDreamDetail(formData);
    if (res.code === STATUS_CODE['SUCCESS'].code) {
      Toast.success('目标修改成功！', 3, () => {
        this.props.history.push({
          pathname: "/dream/tier"
        });
      });
    }
    else if (res.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(res.data.message, 3, () => {
        this.props.history.push({
          pathname: "/login"
        });
      });
    }
    else {
      Toast.fail(res.data.message);
    }
  }
  async componentDidMount(){
    await this.props.getDreamDetail();
    const dream = this.props.dream;
    const user = this.props.user;
    this.setState({
      goalsList: JSON.parse(dream.goalsList)
    });
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamGoal;
