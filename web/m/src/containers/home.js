import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";

import {
  actionUser,
  actionHome
} from '../models/actions';

import Page from '../pages/home/home';


const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => {
      return dispatch(actionUser.setUserInfo(user));
    },
    setUserLogout: () => {
      return dispatch(actionUser.setUserLogout());
    },
    getHomeFeeds: (start, end) => {
      return dispatch(actionHome.getHomeFeeds(start, end))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default withRouter(container);