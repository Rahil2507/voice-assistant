import { useEffect, useState } from "react";

const WeatherPage = ({ weather }) => {
  const [imgOf, setImgOf] = useState();
  const currDay = new Date().toDateString();

  useEffect(() => {
    if (weather.weather[0].main === "Haze") {
      setImgOf("https://cdn-icons-png.flaticon.com/512/1197/1197102.png");
    } else if (weather.weather[0].main === "Clouds") {
      setImgOf("https://cdn-icons-png.flaticon.com/512/4064/4064269.png");
    } else if (weather.weather[0].main === "Rain") {
      setImgOf("https://cdn-icons-png.flaticon.com/512/1146/1146858.png");
    } else if (weather.weather[0].main === "Clear") {
      setImgOf(
        "https://cdn-icons.flaticon.com/png/512/2374/premium/2374598.png?token=exp=1650490499~hmac=c8745d16868c5666312df8465490866f"
      );
    } else if (weather.weather[0].main === "Sunny") {
      setImgOf("https://cdn-icons-png.flaticon.com/512/869/869869.png");
    } else if (weather.weather[0].main === "Smoke") {
      setImgOf("https://cdn-icons-png.flaticon.com/512/7407/7407744.png");
    } else if (weather.weather[0].main === "Mist") {
      setImgOf("https://cdn-icons-png.flaticon.com/512/4005/4005817.png");
    }
  },[]);

  return (
    <>
      <div style={{width: '100%', margin: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div>
          <p style={{fontSize: 45}}>{weather.name},  {weather.sys.country}</p>
          <p style={{fontSize: 40 , padding: '10px', marginLeft: '-10px'}}>{weather.main.temp}° C</p>
          <p>{weather.weather[0].main}</p>
          <p>Humidity : {weather.main.humidity}%</p>
          <p>Pressure : {weather.main.pressure} hPa</p>
          <br/><p>{currDay}</p>
        </div>
        <img src={imgOf} style={{height:'300px'}} alt="img" />
      </div>
    </>
  );
};

export default WeatherPage;
