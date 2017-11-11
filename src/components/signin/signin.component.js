import './signin.style.css';
import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.confirm = this.confirm.bind(this);
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

  confirm() {
    this.props.requiredInfo(this.state);
  }

  render() {
    return (
      <div className="signin-component">
        <p class="title is-4">Step 1. Provide your identity</p>
        <div className="content">
          <div className="notification">
            To get your username and password, you'll need to <a rel="noopener noreferrer" href="https://console.ng.bluemix.net/registration/" target="_blank">sign up for IBM Bluemix</a>
          </div>
        </div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
            <input name="username" value={this.state.username} onChange={this.handleChange} className="input" type="text" placeholder="E.g. 5ae77df8-c9d9-4f0b-56aa-aa6b2c7bd881" />
            <span className="icon is-small is-left">
              <i className="fa fa-lg fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input name="password" value={this.state.password} onChange={this.handleChange} className="input" type="password" placeholder="E.g. UTBtrhRLBgLI" />
            <span className="icon is-small is-left">
              <i className="fa fa-lg fa-key"></i>
            </span>
          </div>
        </div>
        <button className="button is-primary is-fullwidth" onClick={this.confirm}>Confirm</button>
      </div>
    );
  }
}

export default Signin;