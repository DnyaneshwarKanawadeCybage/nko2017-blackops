import React, { Component } from 'react';

import AnalysisReport from './components/analysisReport/analysisReport.component';
import FilterBoard from './components/filterBoard/filterBoard.component';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   report: {},
    //   username: "",
    //   password: ""
    // }
    // this.analysisReport = this.analysisReport.bind(this);
    // this.requiredInfo = this.requiredInfo.bind(this);
  }

  // analysisReport(report) {
  //   console.log('REPORT: ', report);
  //   this.setState({
  //     report: report
  //   });
  // }

  // requiredInfo(fields) {
  //   const { username, password } = fields;
    
  // }

  render() {
    return (
      <section className="app-component section">
        <div className="container">
          <h1 className="title is-spaced">Hello, I am <code className="has-text-primary">Jarvis</code></h1>
          <p class="subtitle is-6">I will help you to extract people, companies, organizations, cities, geographic features etc. from the content.</p>
        </div>
        <hr/>
        <div className="container">
          <div className="columns">
            <div className="column">
              <FilterBoard />              
            </div>
            <div className="column">
              <AnalysisReport />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
