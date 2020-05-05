import React from "react";
import "./styles.css";
import { Container, Col, Row } from "reactstrap";

import logo from "../../assets/logo-2.png";
import pic1 from "../../assets/consultor.png";
import pic2 from "../../assets/investidor.png";

function Opcoes() {
  return (
    <div className="App-opcao">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="InWay" />
        </div>
        <div className="menu">
          <ul className="menu-content">
            <li className="menu-item left">
              Já sou <span>Invetidor</span>
            </li>
            <li className="menu-item">
              Já sou <span>Consultor</span>
            </li>
          </ul>
        </div>
      </header>

      <div className="body">
        <div className="title-opcao">
          <h3>Escolha a opção que mais se adequa à sua situação</h3>
        </div>
        <div className="opcoes">
          <Container>
            <Row>
              <Col xl="4">
                <a style={{ textDecoration: "none" }} href="/new/consult">
                  <div className="card-opcao">
                    <img className="ilustra-opcao" src={pic1} alt="" />
                    <button className="btn-opcao">Consultor</button>
                  </div>
                </a>
              </Col>
              <div className="ou">
                <h5>ou</h5>
              </div>
              <Col xl="4">
                <a style={{ textDecoration: "none" }} href="/new/consult">
                  <div className="card-opcao">
                    <img className="ilustra-opcao" src={pic2} alt="" />
                    <button className="btn-opcao">Investidor</button>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Opcoes;
