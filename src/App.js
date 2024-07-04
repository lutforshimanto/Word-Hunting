// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black"
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <Navbar title="Word Hunting!" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm headings="Write here your text like the following:"></TextForm>
      </div>
    </>
  );
}

export default App;
