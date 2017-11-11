import React, { Component } from 'react';

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
    )
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
          <table className="table">
            <thead>
              <tr>
                <th>Text</th>
                <th>Type</th>
                <th>relevance</th>
              </tr>
            </thead>
            <tbody>
              {entitiesList}
            </tbody>
          </table>
        }

      </div>
    );
  }
}

export default AnalysisReport;

