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
  const [consults, setConsult] = useState([]);

  // Run it  to update All consults when all components are mounted
  useEffect(() => {
    async function loadConsults() {
      // Load all consults saved in database
      const response = await api.get("/consult");
      setConsult(response.data);
    }

    loadConsults();
  }, []);

  // Access to server though API(axios)
  async function handleAddDev(data) {
    // Send all form info to server to save in database
    const response = await api.post("/consult", data);

    // Add new Dev to array
    setConsult([...consults, response.data]);
  }

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
                <DevForm onSubmit={handleAddDev} />
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
