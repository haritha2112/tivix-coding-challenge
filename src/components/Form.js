import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: ''
    };
  }

  updateCity(newCity) {
    this.setState({ city: newCity });
  }

  updateCountry(newCountry) {
    this.setState({ country: newCountry });
  }

  render() {
    return (
      <div className="input-form">
        <input
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={(event) => this.updateCity(event.target.value)}
        />
        <input
          type="text"
          placeholder="Country Code"
          value={this.state.country}
          onChange={(event) => this.updateCountry(event.target.value)}
        />
        <button onClick={() => this.props.getWeatherData(this.state.city, this.state.country)}>
          Go
        </button>
      </div>
    );
  }
}

export default Form;
