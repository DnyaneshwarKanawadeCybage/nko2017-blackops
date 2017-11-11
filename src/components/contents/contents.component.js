import './contents.style.css';
import React, { Component } from 'react';

class Contents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Raj Reddy, is an Indian-American computer scientist and a winner of the Turing Award. He is one of the early pioneers of Artificial Intelligence and has served on the faculty of Stanford and Carnegie Mellon University for over 40 years. He was the founding director of the Robotics Institute at Carnegie Mellon University. He was instrumental in helping to create Rajiv Gandhi University of Knowledge Technologies in India, to cater to the educational needs of the low-income, gifted, rural youth. He is the chairman of International Institute of Information Technology, Hyderabad. He is the first person of Asian origin to receive the ACM Turing Award, in 1994, the highest award in Computer Science, for his work in the field of Artificial Intelligence.',
      url: 'https://en.wikipedia.org/wiki/Raj_Reddy'
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.analyze = this.analyze.bind(this);
  }

  handleChange(event) {
    const {
      name,
      value
    } = event.target;

    this.setState({
      [name]: value
    });
  }

  analyze() {
    this.props.requiredInfo(this.state);
  }

  render() {
    return (
      <div className="contents-component">
        <p class="title is-4">Step 2. What content you want to analyze?</p>
        <div className="content">
          <div className="notification">
            Either typo/copy-paste the content OR website link
          </div>
        </div>

        <div class="field">
          <textarea name="text" className="textarea" type="text" placeholder="Please enter the content which you want to analyze">
            {this.state.text}
          </textarea>
        </div>

        <div className="field">
          <label className="label">Website link</label>
          <div className="control has-icons-left">
            <input className="input" name="url" type="text" value={this.state.url} placeholder="E.g. https://en.wikipedia.org/wiki/Raj_Reddy" />
            <span className="icon is-small is-left">
              <i className="fa fa-lg fa-external-link"></i>
            </span>
          </div>
        </div>
        <button className="button is-primary is-fullwidth" onClick={this.analyze}>Analyze</button>
      </div>
    );
  }
}

export default Contents;

