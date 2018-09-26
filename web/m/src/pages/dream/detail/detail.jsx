import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputItem, List, TextareaItem, Button, Toast, WhiteSpace, Icon } from 'antd-mobile';
import { post, getQuery } from '../../../utils/util';
import STATUS_CODE from '../../../utils/statusCode';
import GoalList from '../../../components/GoalList/GoalList';
import './detail.less';

class DreamDetail extends Component {
  state = {
    title: "",
    content: "",
    goalsList: [],
    tiersList: []
  }
  render() {
    return (
      <div className="page page-dream-detail">
        <div className="detail-info">
          <div className="title">
            {this.state.title}
          </div>
          <div className="content">
            {this.state.content}
          </div>
        </div>
        <div className="goals-list">
          <div className="goals-list-title">
            目标
          </div>
          <GoalList items={this.state.goalsList} />
        </div>
        <div className="tiers-list">

        </div>
      </div>
    );
  }
  async componentDidMount() {
    let query = getQuery(this.props.location.search);

    const response = await post('http://127.0.0.1:7001/dream/detail', {
      data: query
    });
    let result = response.data;
    let data = result.data;
    if (result.code === STATUS_CODE['SUCCESS'].code) {
      data.tiersList = data.tiersList ? JSON.parse(data.tiersList) : data.tiersList;
      data.goalsList = data.goalsList ? JSON.parse(data.goalsList) : data.goalsList;
      this.setState({
        title: data.title,
        content: data.content,
        tiersList: data.tiersList,
        goalsList: data.goalsList
      });
    } else if (result.code === STATUS_CODE['USER_NOT_LOGIN'].code) {
      Toast.fail(result.message, 3, () => {
        this.props.history.push({
          pathname: '/user/signin',
        });
      });
    }
    else {
      Toast.fail(result.message);
    }
  }
}

// BragItem.propTypes = {
//   avatar: PropTypes.string.isRequired
// }

export default DreamDetail;
