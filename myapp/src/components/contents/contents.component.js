import './contents.style.css';
import React, { Component } from 'react';

class Contents extends Component {
  render() {
    return (
      <nav className="contents-component">
        <p class="panel-heading">
          Please enter the content which you want to analyze
        </p>
        <div className="panel-block">
          <textarea className="textarea" type="text" placeholder="Please enter the content which you want to analyze">
            Raj Reddy, is an Indian-American computer scientist and a winner of the Turing Award. He is one of the early pioneers of Artificial Intelligence and has served on the faculty of Stanford and Carnegie Mellon University for over 40 years. He was the founding director of the Robotics Institute at Carnegie Mellon University. He was instrumental in helping to create Rajiv Gandhi University of Knowledge Technologies in India, to cater to the educational needs of the low-income, gifted, rural youth. He is the chairman of International Institute of Information Technology, Hyderabad. He is the first person of Asian origin to receive the ACM Turing Award, in 1994, the highest award in Computer Science, for his work in the field of Artificial Intelligence.
          </textarea>
        </div>
      </nav>
    );
  }
}

export default Contents;

