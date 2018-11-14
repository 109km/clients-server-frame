import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionUser
} from '../models/actions';

import Page from '../pages/account/account';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: user => {
      return dispatch(actionUser.updateUserInfo(user));
    },
    setUserInfo: user => {
      return dispatch(actionUser.setUserInfo(user));
    },
    setUserAvatar: avatar => {
      return dispatch(actionUser.setUserAvatar(avatar));
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default withRouter(container);