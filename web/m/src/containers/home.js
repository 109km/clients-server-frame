import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";

import {
  actionUser
} from '../models/actions';

import Page from '../pages/home/home';


const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => {
      dispatch(actionUser.setUserInfo(user));
    },
    setUserLogout: () => {
      dispatch(actionUser.setUserLogout());
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default withRouter(container);