import React, { Component } from 'react';
import DataTracker from './DataTracker';

function StatisticsRow(props) {
  return (
    <div className="row">
      <p className="label">{props.label}</p>
      <p className="data">{props.data}</p>
    </div>
  );
}

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: 0,
      mean: 0,
      mode: 0,
    };
  }

  componentDidMount() {
    this.updateStatistics(this.props.values);
  }

  componentWillReceiveProps(nextProps) {
    this.updateStatistics(nextProps.values);
  }

  updateStatistics(values) {
    const dataTracker = new DataTracker();
    values.forEach(value => dataTracker.insert(value));
    this.setState({
      min: dataTracker.showMin(),
      max: dataTracker.showMax(),
      mean: dataTracker.showMean(),
      mode: dataTracker.showMode(),
    });
  }

  render() {
    return (
      <div className="statistics">
        <h3>{this.props.title}</h3>
        <StatisticsRow label='Maximum' data={this.state.max} />
        <StatisticsRow label='Minimum' data={this.state.min} />
        <StatisticsRow label='Mean' data={this.state.mean} />
        <StatisticsRow label='Mode' data={this.state.mode} />
      </div>
    );
  }
}

export default Statistics;
