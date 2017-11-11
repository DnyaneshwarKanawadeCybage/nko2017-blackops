import React, { Component } from 'react';

import Signin from '../signin/signin.component';
import Contents from '../contents/contents.component';

class FilterBoard extends Component {
  constructor(props) {
    super(props);

    this.requiredInfo = this.requiredInfo.bind(this);
    this.confirmFields = {};
  }

  requiredInfo(fields, isUrl = false) {
    const {
      username,
      password,
      text,
      url
    } = fields;

    if (username) {
      this.confirmFields.username = username;
    }

    if (password) {
      this.confirmFields.password = password;
    }

    if (!isUrl && text) {
      this.confirmFields.text = text;
    }

    if (isUrl && url) {
      this.confirmFields.url = url;
    }
    
    if (this.confirmFields.username && this.confirmFields.password && (this.confirmFields.text || this.confirmFields.url)) {
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

