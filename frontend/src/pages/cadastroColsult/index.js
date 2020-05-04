import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import api from "../../services/api";

//* --- > Css import < ---*
import "../../global.css";
import "./index.css";
import "./Sidebar.css";
import background from "../../assets/Formulario.png";
import logo from "../../assets/logo.png";

import DevForm from "../../components/DevForm";
// import DevConsult from "../../components/consultForm"
// import DevItem from "../../components/DevItem";

function App() {
  // Create States to use values
  const [devs, setDevs] = useState([]);

  // Run it  to update All DEVS when all components are mounted
  useEffect(() => {
    async function loadDevs() {
      // Load all devs saved in database
      const response = await api.get("/consult");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  // Access to server though API(axios)
  // async function handleAddDev(data) {
  //   // Send all form info to server to save in database
  //   const response = await api.post("/consult", data);

  //   // Add new Dev to array
  //   setDevs([...devs, response.data]);
  // }

  return (
    <>
      <img className="background" src={background} alt="" />
      <Container>
        <img className="logo" src={logo} alt="" />
        <Row id="form" style={{ display: "flex" }}>
          <Col xs="6" md="4">
            <div>
              {/* --- > ASIDE < ---*/}
              <aside>
                <strong>Profissional</strong>
                <DevForm />
              </aside>
            </div>
          </Col>
          {/* <Col xs="6" md="4" > */}
          <p className="desc">
            Precisamos traçar seu o seu <strong>perfil</strong>
          </p>
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default App;
