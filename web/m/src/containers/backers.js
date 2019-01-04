import {
  connect
} from 'react-redux';

import {
  withRouter
} from "react-router-dom";
import {
  actionBackers
} from '../models/actions';

import Page from '../pages/backers/backers';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    getBackersByUserId: (userId) => {
      return dispatch(actionBackers.getBackersByUserId({
        userId
      }));
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default withRouter(container);