import React, {useState} from 'react';
import './App.css';
import Form from './components/form';
import Weatherwidget from './components/weatherwidget';
import ErrorBox from './components/ErrorBox';
import axios from 'axios';

function App() {

  interface WeatherDataProps {
    cityname: string,
    temp: number,
    temp_max: number,
    temp_min: number,
    country: string
  }

  let errorMessage = 'provide your city name';

  const [showError, setShowError] = useState<boolean>(false);
  
  const [weatherData, setWeatherData] = useState<WeatherDataProps>();

  const onSearchClick = async (city: string) => {
    if(city.trim().length === 0){
      setShowError(true); 
      setTimeout(() => {
        setShowError(false); 
      },2000);
      return
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01a58287d36ea713afe7faab21f6a689`);

    if(response){
      const {name} = response.data;
      const {temp, temp_max, temp_min} = response.data.main;
      const {country} = response.data.sys;
      setWeatherData({
        cityname: name,
        temp,
        temp_max,
        temp_min,
        country
      });
    }
  }
  
  return (
    <div className="App container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
        {showError ? <ErrorBox message={errorMessage} /> : ''}
        <Form onSearchClick={onSearchClick} />
        {weatherData ? <Weatherwidget data={weatherData} /> : ''}
      </div>
      </div>
    </div>
  );
}

export default App;
