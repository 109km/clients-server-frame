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

import Page from '../../pages/dream/tier/tier';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => {
      dispatch(actionUser.setUserInfo(user));
    },
    getDreamDetail: (dreamId = null) => {
      return dispatch(actionDream.getDreamDetail({
        dreamId
      }));
    },
    updateDreamDetail: (formData) => {
      return dispatch(actionDream.updateDreamDetail(formData));
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default withRouter(container);