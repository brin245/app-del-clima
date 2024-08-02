import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import LoadingCard from "./components/LoadingCard";
import AdCard from "./components/AdCard";
function App() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [city, setCity] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [background, setBackground] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    const success = (position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };
    const error = () => {
      setHasError(true);
      setIsLoading(false);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  useEffect(() => {
    if (coords) {
      const API_KEY = "6e26cd6bfd5b61a2dc601fabf07a827e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`;
      axios
        .get(url)
        .then((res) => {
          setWeather(res.data);
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);
          setTemp({ celsius, fahrenheit });
          setMessageError(false);
          setBackground(res.data.weather[0].main);
        })
        .catch((err) => {
          console.error(err);
          setMessageError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    //Para que revise los datos que se envian(IMPORTANTE)
  }, [coords, city]);

  //Esta parte es para las imagenes de
  const objStyles = {
    background: ` url('https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png'), radial-gradient(circle, rgba(174,219,238,1) 0%, rgba(0,40,255,1) 100%)`,
  };

  return (
    <div style={objStyles} className="app flex-container">
      {isLoading ? (
        <div>
          {/* Aca agregar un componente personalizado para poder hacer diferentes procesos */}
          <LoadingCard showMessage={showMessage} />
        </div>
      ) : hasError ? (
        <AdCard />
      ) : (
        <WeatherCard
          weather={weather}
          temp={temp}
          setCity={setCity}
          messageError={messageError}
          city={city}
        />
      )}
    </div>
  );
}
export default App;
