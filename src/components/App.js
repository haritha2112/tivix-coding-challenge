import React, { Component } from 'react';
import Form from './Form';
import Statistics from './Statistics';

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

  isWeatherDataFetched() {
    return this.state.weatherData !== undefined;
  }

  getHumidityData() {
    return this.isWeatherDataFetched() ? (
      this.state.weatherData.list.map(data => data.main.humidity)
    ) : [];
  }

  getTemperatureData(hours) {
    return this.isWeatherDataFetched ? (
      this.state.weatherData.list.reduce((acc, data) => {
        const hour = data.dt_txt.substring(11, 13);
        return hours.includes(hour) ? acc.concat([data.main.temp]) : acc;
      }, [])
    ) : [];
  }

  render() {
    return (
      <React.Fragment>
        <Form getWeatherData={this.getWeatherData}/>
        {
          this.isWeatherDataFetched() && (
            <div className='statistics-container'>
              <Statistics title='Day Temperature' values={this.getTemperatureData(['09', '12', '15', '18'])}/>
              <Statistics title='Night Temperature' values={this.getTemperatureData(['21', '0', '03', '06'])}/>
              <Statistics title='Morning Temperature' values={this.getTemperatureData(['06', '09', '12'])}/>
              <Statistics title='Humidity' values={this.getHumidityData()}/>
            </div>
          )
        }
      </React.Fragment>
    );
  }
};
