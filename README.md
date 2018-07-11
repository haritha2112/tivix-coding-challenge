# Tivix Coding Challenge

This solution to the Tivix coding challenge is implemented using ReactJS. Data from the ```5 day / 3 hour forecast``` endpoint is used to display results. Data from the ```16 day / daily forecast``` endpoint would have suited the problem statement better. However, this endpoint is available only for paid accounts and hence could not be used.

Some assumptions have been made to calculate the statistics based on the ```5 day / 3 hour forecast``` data.
- Morning temperature is calculated using the temperature at ```06:00```, ```09:00``` and ```12:00``` hours.
- Day temperature is calculated using the temperature at ```09:00```, ```12:00```, ```15:00``` and ```18:00``` hours.
- Night temperature is calculated using the temperature at ```21:00```, ```00:00```, ```03:00``` and ```06:00``` hours.

### Setup
Clone the repository
```sh
$ git clone https://github.com/haritha2112/tivix-coding-challenge.git
$ cd tivix-coding-challenge
```
Install the dependencies.
```sh
$ npm install
```
Export API_KEY environment variable.
```sh
$ export API_KEY='<Your OpenWeatherMap API key>'
```
Start the dev server.
```sh
$ npm start
```
Open ```localhost:3000``` to access the app.
