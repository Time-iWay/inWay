import React from "react";
import "./profile.css";

import logo from "../../assets/logo-n.png";

function Profile() {
  return (
    <div className="App-profile">
      <div className="carregar"></div> {/*Fazer amanha*/}
      <header className="header-profile">
        <div className="top">
          <img src={logo} alt="InWay" />
          <h4>Bem vindo(a)</h4>
        </div>
        <div className="community">
          <h5>Community</h5>
        </div>
      </header>
      <div className="banner">
        <div className="banner-body">
          <div className="ft">
            <div className="ft-img"></div>
          </div>
          <h3 className="banner-name">Gabriela Nobrega</h3>
        </div>
      </div>
      <div className="content-profile">
        <div className="body-profile">
          <div className="search-profile">
            <input className="search" type="text" placeholder="Search!" />
          </div>
          <div className="body-content-profile">
            <h1>Encontre pessoas que buscam consultores como você</h1>
            <h4>
              Pesquisa feita de acordo com a sua personalidade de investimento!
              F@da né
            </h4>
            <div className="recomendados-profile">
              <div className="card-profile">
                <div className="ft"></div>
                <h3 className="nome-recomendados">José Martins</h3>
                <button className="btn1">Ver mais</button>
                <button className="btn2">Enviar E-mail</button>
              </div>
              <div className="card-profile">
                <div className="ft"></div>
                <h3 className="nome-recomendados">Toni Lima</h3>
                <button className="btn1">Ver mais</button>
                <button className="btn2">Enviar E-mail</button>
              </div>
              <div className="card-profile">
                <div className="ft"></div>
                <h3 className="nome-recomendados">Maria Júlia</h3>
                <button className="btn1">Ver mais</button>
                <button className="btn2">Enviar E-mail</button>
              </div>
              <div className="card-profile">
                <div className="ft"></div>
                <h3 className="nome-recomendados">Diego Castã</h3>
                <button className="btn1">Ver mais</button>
                <button className="btn2">Enviar E-mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
