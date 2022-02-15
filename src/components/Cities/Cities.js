import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Cities() {
  const api_endpoint = process.env.REACT_APP_CITIES_ENDPOINT;
  var [country] = useState("Romania");
  const [cities, setCities] = useState([]);
  const location = useLocation();

  country = location.pathname.split("/").pop();

  useEffect(() => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),
      };
      fetch(api_endpoint, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCities(data.data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="center-list">
      <h2>Cities of {country}</h2>
      {cities.map((city) => (
        <li key={city}> {city} </li>
      ))}
    </div>
  );
}

export default Cities;
