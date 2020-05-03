import React from "react";
import "./App.css";

import logo from "../../assets/logo.png";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="InWay" />
        </div>
        <div className="menu">
          <ul className="menu-content">
            <li className="menu-item">
              Já sou <span>Invetidor</span>
            </li>
            <li className="menu-item">
              Já sou <span>Consultor</span>
            </li>
          </ul>
        </div>
      </header>

      <div className="body">
        <div className="textos">
          <div className="body-texto">
            <h1 className="title">
              Incentivando quem <span>quer</span>, Indicando quem{" "}
              <span>pode.</span>
            </h1>
          </div>

          <div className="body-sub">
            <h5 className="subtitle">
              Gostaria-mos de lhe chamar pelo nome! Preencha os espaços e
              selecione uma das opções para lhe conhecer-mos melhor.
            </h5>
          </div>
        </div>
        <div className="form">
          <div className="body-form">
            <input
              className="input"
              type="text"
              placeholder="Nome"
              autoComplete="off"
              required
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <div>
              <button className="btn">Investidor</button>
              <h5 className="ou">- ou -</h5>
              <button className="btn">Consultor</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
