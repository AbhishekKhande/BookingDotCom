import React from "react";
import { ViewNoLog } from "../headers/ViewNoLog";
import "./welcome.css";
import "../../Images/bus-stop.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  // const navigatorPages = useNavigate();
  return (
    <>
      {<ViewNoLog />}
      <div className="services-div">
        <div className="services">
          <Link to="/bus" className="service ">
            <div id="Bus">
              <img src="frontend/src/Images/bus-stop.png" alt="" />
            </div>{" "}
          </Link>
          <Link to="/train" className="service ">
            <div id="Train">
              <img src="frontend/src/Images/bus-stop.png" alt="" />
            </div>
          </Link>
          <Link to="/movies" className="service ">
            <div id="Movies">
              <img src="frontend/src/Images/bus-stop.png" alt="" />
            </div>
          </Link>
          <Link to="/concerts" className="service ">
            <div id="Concerts">
              <img src="frontend/src/Images/bus-stop.png" alt="" />
            </div>
          </Link>
          <Link to="/flights" className="service ">
            <div id="Flights">
              <img src="frontend/src/Images/bus-stop.png" alt="" />
            </div>
          </Link>
          <Link to="hotels" className="service ">
            <div id="Hotels">
              <img src="frontend/src/Images/bus-stop.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
