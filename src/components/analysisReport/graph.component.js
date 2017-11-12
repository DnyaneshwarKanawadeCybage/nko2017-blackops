import './graph.style.css';
import React, { Component } from 'react';
import {
  RadialChart
} from 'react-vis';

class Graph extends Component {
  constructor(props) {
    super(props);
  }

  groupArray(arr, groupBy, keepProperty) {
    let rArr = [], i;
    arr.forEach(item => {
        if((i = rArr.findIndex(obj => obj[groupBy] === item[groupBy])) !== -1) {
          rArr[i][`${keepProperty}`].push(item[keepProperty]);
        } else {
          rArr.push({
            [groupBy]: item[groupBy],
            [`${keepProperty}`]: [item[keepProperty]]
          }); 
        }
    });
    return rArr;
  }

  buildRadialChartData(groups) {
    let data = [];
    groups.forEach(item => {
      data.push({
        angle: item.text.length,
        label: `[${item.text.length}] ${item.type}`
      });
    });
    return data;
  }

  render() {
    const groups = this.groupArray(this.props.data, 'type', 'text');
    const myData = this.buildRadialChartData(groups);
    
    return (
      <RadialChart
        data={myData}
        width={700}
        height={500}
        innerRadius={100}
        radius={250}
        showLabels={true}
        animation={true} /> 
    )
  }
}

export default Graph;
