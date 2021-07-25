import "./styles.css";

import Wind from "./Wind";
import Humidity from "./Humidity";
import Precipitation from "./Precipitation";
import Infos from "./Infos";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form className="search-form">
          <div className="row">
            <div className="col">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                className="search-input"
              />
              <input type="submit" value="Search" className="submit-button" />
            </div>
          </div>
        </form>
        <h1>Sydney NSW, Australia</h1>
        <Infos />
        <div className="row">
          <div className="col-4">
            <div className=" ">
              {" "}
              <span className="temperature">19</span>
              <span className="units">
                <a id="celsius" href="#" className="degree">
                  °C{" "}
                </a>
                |
                <a id="fahrenheit" href="#" className="degree">
                  °F
                </a>
              </span>{" "}
            </div>
          </div>
          <div className="col-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              className="weather-icon"
            />
          </div>
          <div className="col-6 values">
            <ul>
              <li>
                <Precipitation Value="1" />
              </li>
              <li>
                <Humidity Value="22" />
              </li>
              <li>
                <Wind Value="9" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
