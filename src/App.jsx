import React from 'react';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Header/Home';
import About from './Components/BodyContent/About';
import Service from './Components/BodyContent/Service';
import Clients from './Components/BodyContent/Client';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Service />
        <Clients />
      </main>
    </>
  );
}

export default App;
