import React from "react";
import "./profile.css";

import logo from "../../assets/logo-n.png";

function Profile() {
  return (
    <div className="App-profile">
      <div className="carregar"></div>  {/*Fazer amanha*/} 

      <header className="header-profile">
        <div className="top">
            <img src={logo} alt="InWay" />
            <h4>Bem vindo(a)</h4>
        </div>
      </header>

        <div className="banner"> 
            <div className="banner-body">
                <div className="ft"></div>
                <h3 className="banner-name">Gabriela Nobrega</h3>
            </div>
        </div>   

        <div className="content-profile">
            <div className="body-profile">
                <div className="emails-profile">
                    <div className="email"></div>
                </div>
                <div className="body-content-profile">
                    <h1>Profissionais que podem te ajudar!</h1>
                    <h4>Pesquisa feita de acordo com a sua personalidade de investimento! F@da né</h4>
                    <div className="recomendados-profile">
                        <div className="card-profile">
                            <div className="ft"></div>
                            <h3 className="nome-recomendados">Victor Lima</h3>
                            <button className="btn1">Ver mais</button>
                            <button className="btn2">Enviar E-mail</button>
                        </div>
                        <div className="card-profile">
                            <div className="ft"></div>
                            <h3 className="nome-recomendados">Guilherme Lima</h3>
                            <button className="btn1">Ver mais</button>
                            <button className="btn2">Enviar E-mail</button>
                        </div>
                        <div className="card-profile">
                            <div className="ft"></div>
                            <h3 className="nome-recomendados">Eduardo Barbosa</h3>
                            <button className="btn1">Ver mais</button>
                            <button className="btn2">Enviar E-mail</button>
                        </div>
                        <div className="card-profile">
                            <div className="ft"></div>
                            <h3 className="nome-recomendados">Diego Henrique</h3>
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
