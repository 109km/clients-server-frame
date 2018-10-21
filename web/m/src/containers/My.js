import {
  connect
} from 'react-redux';
import {
  setUserInfo
} from '../models/actions';

import My from '../pages/my/my'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: data => {
      console.log(data);
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(My)

export default container;