import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Header/>
      <Home />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
