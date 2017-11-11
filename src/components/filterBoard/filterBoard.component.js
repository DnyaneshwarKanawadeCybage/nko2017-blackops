import React, { Component } from 'react';

import Signin from '../signin/signin.component';
import Contents from '../contents/contents.component';

class FilterBoard extends Component {
  constructor(props) {
    super(props);

    this.requiredInfo = this.requiredInfo.bind(this);
    this.confirmFields = {};
  }

  requiredInfo(fields) {
    let { username, password, text } = fields;

    if (username) {
      this.confirmFields.username = username;
    }

    if (password) {
      this.confirmFields.password = password;
    }

    if (text) {
      this.confirmFields.text = text;
    }
    
    if (this.confirmFields.username && this.confirmFields.password && this.confirmFields.text) {
      this.props.analyze(this.confirmFields);
    }
  }

  render() {
    return (
      <div className="filter-board-component">
        <Signin requiredInfo={this.requiredInfo}/>
        <Contents requiredInfo={this.requiredInfo}/>
      </div>
    );
  }
}

export default FilterBoard;

