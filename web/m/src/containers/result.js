import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionUser
} from '../models/actions';

import Result from '../pages/result/result';

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
)(Result)
export default withRouter(container);