import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionUser
} from '../models/actions';

import My from '../pages/my/my';

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
)(My)
export default withRouter(container);