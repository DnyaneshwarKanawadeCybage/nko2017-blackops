import React, { Component } from 'react';
import axios from 'axios';

import AnalysisReport from './components/analysisReport/analysisReport.component';
import FilterBoard from './components/filterBoard/filterBoard.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: {}
    }
    this.analyze = this.analyze.bind(this);
  }

  analyze(confirmFields) {
    const _self = this;

    axios.post('/analyze', confirmFields)
    .then(function (response) {
      _self.setState({
        reports: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
              <FilterBoard analyze={this.analyze}/>              
            </div>
            <div className="column">
              <AnalysisReport reports={this.state.reports}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
