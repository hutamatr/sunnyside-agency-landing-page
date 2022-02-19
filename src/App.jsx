import React from "react";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Header/Home";
import About from "./Components/Main/About";
import Service from "./Components/Main/Service";
import Client from "./Components/Main/Client";
import Picture from "./Components/Main/Picture";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Service />
        <Client />
        <Picture />
      </main>
      <Footer />
    </>
  );
}

export default App;
