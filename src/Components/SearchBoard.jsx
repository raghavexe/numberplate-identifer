import "bootstrap/dist/css/bootstrap.min.css";
import DisplayBox from "./DisplayBox";
import "./SearchBoard.css";
import { useState } from "react";
import CityData from "../city-initials(de).json";
import Result from "./Result";
import HTY from "./HTY";

export default function SearchBoard() {
  const [initial, setInitial] = useState("");
  const [resultCity, setResultCity] = useState("");
  const [resultState, setResultState] = useState("");
  const [isFound, setFound] = useState();

  const handleChange = (event) => {
    setInitial(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const match = CityData.find((item) => item.initials === initial);
    if (match) {
      setResultCity(match.city);
      setResultState(match.state);
      setFound(true);
    } else {
      setResultCity("");
      setResultState("");
      setFound(false);
    }
  };
  let display;
  if (isFound) {
    display = <Result city={resultCity} state={resultState} />;
  } else {
    display = <Result city="N/A" state="N/A" />;
  }

  return (
    <div className="container text-center custom-container">
      <div className="row">
        <div className="col">
          <DisplayBox title="How to Use">
            <HTY></HTY>
          </DisplayBox>
        </div>
        <div className="col">
          <DisplayBox title="Look up numberplate initials">
            <div id="form-body">
              <form onSubmit={handleSubmit}>
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <p className="search-box-title">Enter Initials</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        id="input-box"
                        name="initial"
                        value={initial}
                        onChange={handleChange}
                        maxLength="3"
                        placeholder="HH"
                        required
                      />
                    </div>
                    <div className="col">
                      <button type="submit">Check</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="search-box-strips">
              <div className="strip" id="black"></div>
              <div className="strip" id="red"></div>
              <div className="strip" id="yellow"></div>
            </div>
          </DisplayBox>
        </div>
        <div className="col">
          <DisplayBox title="Results">{display}</DisplayBox>
        </div>
      </div>
    </div>
  );
}
