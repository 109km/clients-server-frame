import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionUser,
  actionDream
} from '../../models/actions';

import Page from '../../pages/dream/edit/edit';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => {
      dispatch(actionUser.setUserInfo(user));
    },
    getDreamDetail: (dreamId = null) => {
      return dispatch(actionDream.getDreamDetail({dreamId}));
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default withRouter(container);