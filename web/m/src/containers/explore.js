import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionUser,
  actionExplore
} from '../models/actions';

import Page from '../pages/explore/explore';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => {
      return dispatch(actionUser.setUserInfo(user));
    },
    getExploreFeeds: (start, end) => {
      return dispatch(actionExplore.getExploreFeeds(start, end));
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
export default withRouter(container);