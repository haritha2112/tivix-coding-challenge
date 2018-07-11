import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: undefined
    };
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  getWeatherData(city, country) {
    const apiKey = process.env.API_KEY;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        this.setState({ weatherData: data })
      });
  }

  render() {
    return (
      <Form getWeatherData={this.getWeatherData}/>
    );
  }
};
