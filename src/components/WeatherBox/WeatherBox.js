import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';
import { useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = props => {

  const [weather, setWeather] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);


  const handleCityChange = useCallback((cityName) => {
    console.log(cityName)

    setPending(true);
    setError(false);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9ac27457f503df025b393de6fc84e13a&units=metric`)
    .then(res => {
      if(res.status === 200) {
        return res.json()
          .then(data => {
      
            console.log(data);
            const weatherData = {
              city: data.name,
              temp: data.main.temp,
              icon: data.weather[0].icon,
              description: data.weather[0].main
            };
            setWeather(weatherData);
            setPending(false);
          })
        } else {
          setError(true);
        }
     });
}, []);

  return (
    <section>
      <PickCity handleCityChange={handleCityChange} />
      {weather && !pending && <WeatherSummary {...weather} />}
      { (pending && !error) && <Loader /> }
      { error && <ErrorBox /> }
    </section>
  )
};

export default WeatherBox;