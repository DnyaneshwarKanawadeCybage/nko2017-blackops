import React, { Component } from 'react';

import Signin from './components/signin/signin.component';
import Contents from './components/contents/contents.component';

class App extends Component {
  render() {
    return (
      <section className="app-component section">
        <div className="container">
          <h1 className="title">Hello, my name is <code className="has-text-primary">Jarvis</code></h1>          
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <Signin/>
            </div>
            <div className="column">
              <Contents/>
            </div>
          </div>

          <button className="button is-primary is-fullwidth">Analyze</button>
        </div>        
      </section>
    );
  }
}

export default App;
