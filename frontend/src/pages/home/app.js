import React from "react";
import "./app.css";

import logo from "../../assets/logo.png";
import pic from "../../assets/ilustra.png";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="InWay" />
        </div>
        <div className="menu">
          <ul className="menu-content">
            <li style={{ color: "#fff" }} className="menu-item left">
              Já sou <span>Invetidor</span>
            </li>
            <li style={{ color: "#fff" }} className="menu-item">
              Já sou <span>Consultor</span>
            </li>
          </ul>
        </div>
      </header>

      <div className="body-app">
        <div className="body-content">
          <div className="body-texto">
            <h1 className="title">
              Incentivando quem <span>quer</span>, Indicando quem{" "}
              <span>pode.</span>
            </h1>
          </div>

          <div className="body-buttons">
            <button className="buttons">
              <span>Sobre nós</span>
            </button>
            <button className="buttons">
              <a className="link1" href="/start">
                <span>Cadastrar </span>
              </a>
            </button>
          </div>
        </div>

        <div className="body-image">
          <img className="img" src={pic} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
