import './report.style.css';
import React, { Component } from 'react';
import Graph from './graph.component';

class AnalysisReport extends Component {
  entitiesTable(entity) {
    let {
      text,
      type,
      relevance
    } = entity;

    return (
      <tr>
        <td>{text}</td>
        <td>{type}</td>
        <td>{relevance}</td>
      </tr>
    );
  }

  render() {
    const {
      entities
    } = this.props.reports;

    let entitiesList = [];

    if (entities) {
      entitiesList = entities.map((entity) => this.entitiesTable(entity));
    }

    return (
      <div className="analysis-report-component">
        <p className="title is-3">Analysis Report</p>

        {entities &&
          <div className="graph-container">
            <Graph data={entities}/>
          </div>
        }

        {entities &&
          <div className="body-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>Text</th>
                  <th>Type</th>
                  <th>Relevance</th>
                </tr>
              </thead>
              <tbody>
                {entitiesList}
              </tbody>
            </table>
          </div>
        }

      </div>
    );
  }
}

export default AnalysisReport;

