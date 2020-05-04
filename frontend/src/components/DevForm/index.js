import React, { useState, useEffect } from "react";

import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./index.css";

export default function DevForm({ onSubmit }) {
  // Create States to use values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // Run it  to update GEOLOCATION when all components are mounted
  useEffect(() => {
    // Function to get geolocation
    navigator.geolocation.getCurrentPosition(
      // If it success, get the position
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      //If it err, log error
      (err) => {
        console.log(err);
      },
      {
        //timeout to get any response for geolocation
        timeout: 30000,
      }
    );
  }, []);

  // async function handleSubmit(e) {
  //   // Prevent form to change to "next" page
  //   e.preventDefault();

  //   // Send data to handleAddDev function in App.js
  //   await onSubmit({
  //     username,
  //     email,
  //     latitude,
  //     longitude,
  //   });

  //   // Clean githubusername and email fields
  //   setUsername("");
  //   setEmail("");
  // }

  return (
    <form>
      <div className="input-block">
        <label htmlFor="username">Seu nome</label>
        <input
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="email">seu E-mail</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <FormControlLabel
        style={{ paddindTop: "10px" }}
        // value= "true"
        control={
          <Checkbox
            color="primary"
            id="Check"

            // onChange={e => setColetaEmail(published ? false : true)} //altera entre V e F ao clicar
          />
        }
        label="Não desejo receber e-mails"
        labelPlacement="end"
        // onChange={e => setColetaEmail(e.target.value)}
      />
      <br></br>
      <a className="link" href="/profile">
        Avançar
      </a>
    </form>
  );
}
