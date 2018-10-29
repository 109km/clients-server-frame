import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionUser
} from '../models/actions';

import Account from '../pages/account/account';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => {
      dispatch(actionUser.setUserInfo(user));
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)

export default withRouter(container);