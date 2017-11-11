import React, { Component } from 'react';

import Signin from '../signin/signin.component';
import Contents from '../contents/contents.component';

class FilterBoard extends Component {
  constructor(props) {
    super(props);

    this.analysisReport = this.analysisReport.bind(this);
    this.requiredInfo = this.requiredInfo.bind(this);
  }

  analysisReport(report) {
    console.log('REPORT: ', report);
    this.setState({
      report: report
    });
  }

  requiredInfo(fields) {
    const { username, password } = fields;
    
  }

  render() {
    return (
      <div className="filter-board-component">
        <Signin requiredInfo={this.requiredInfo}/>
        <Contents analysisReport={this.analysisReport}/>
      </div>
    );
  }
}

export default FilterBoard;

