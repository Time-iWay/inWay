<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useState } from 'react';
import api from './services/api';

//* --- > Css import < ---*
import './global.css';
>>>>>>> 98ed3d16d5c11d86cb7a0f568b84dffebefcaa85
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

import logo from './assets/logo.png';

function App() {
  // Create States to use values
  const [devs, setDevs] = useState([]);

  // Run it  to update All DEVS when all components are mounted
  useEffect(() => {
    async function loadDevs() {
      // Load all devs saved in database
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  },[]);

  // Access to server though API(axios)
  async function handleAddDev(data){
      // Send all form info to server to save in database
    const response = await api.post('/devs', data)

    // Add new Dev to array
    setDevs([...devs, response.data]);
  }

  return (
<<<<<<< HEAD
    <div className="App">
        <header className="header">
           <div className="logo">
                <img src={logo} alt="InWay"/>
            </div>
            <div className="menu">
                <ul className="menu-content">
                    <li className="menu-item">Já sou <span>Investidor</span></li>
                    <li className="menu-item">Já sou <span>Consultor</span></li>
                </ul>
            </div>
        </header>
        
        <div className="body">
            <div className="textos">
                <div className="body-texto">
                    <h1 className="title">Incentivando quem <span>quer</span>, Indicando quem <span>pode.</span></h1>
                </div>  

                <div className="body-sub">
                    <h5 className="subtitle">Gostaria-mos de lhe chamar pelo nome! Preencha os espaços e selecione uma das opções para lhe conhecer-mos melhor.</h5>
                </div>  
            </div>
            <div className="form">  
                <div className="body-form">
                    <input className="input" type="text" placeholder="Nome" autoComplete="off" required/>
                    <input className="input" type="email" placeholder="Email" autoComplete="off" required/>

                    <div className="btns">
                        <button className="btn">Investidor</button>
                        <h5 className="ou">- ou -</h5>
                        <button className="btn">Consultor</button>
                    </div>    
                </div>                     
            </div>
        </div>
=======
    <div id="app">
      { /* --- > ASIDE < ---*/ }
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      { /* --- > MAIN < ---*/ }
      <main>
        <ul>
          {devs.map(dev => (<DevItem key={dev._id} dev={dev} />))}
        </ul>
      </main>
>>>>>>> 98ed3d16d5c11d86cb7a0f568b84dffebefcaa85
    </div>
  );
}

export default App;
