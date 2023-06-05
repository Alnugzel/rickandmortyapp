import { useState, useEffect } from "react";
import useFetch from "./hook/useFetch";
import randomNumber from "./utils/randomNumber";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import Characters from "./components/Characters";
import InputSearch from "./components/InputSearch";

function App() {
  const [locationNumber, setLocationNumber] = useState();

  const url = `https://rickandmortyapi.com/api/location/${
    randomNumber(126) || locationNumber
  }`;
  const [location, getLocation] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationNumber]);

  return (
    <>
      <div className="app">
        <header className="header__app">
          <div className="content__header-img">
            <img src="/header.jpg" alt="" />
          </div>
        </header>

        <InputSearch setLocationNumber={setLocationNumber} />

        <LocationInfo location={location} />
        <div className="characters">
          {location?.residents.map((url) => (
            <Characters url={url} key={url} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
