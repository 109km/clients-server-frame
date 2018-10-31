import React, { Component } from 'react';
import { List, Icon, Result } from 'antd-mobile';
import Theme from '../../theme.js';
import './Result.less';

class ResultPage extends Component {
  render() {
    return (
      <div className="page page-result">
        <Result
          img={<Icon type="check-circle" className="result-icon" style={{ fill: Theme['@brand-primary'] }} />}
          title={this.props.result.title}
          message={this.props.result.message}
        />
      </div>
    )

  }
}

export default ResultPage;