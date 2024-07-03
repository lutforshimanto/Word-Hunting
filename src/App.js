// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="Word Hunting!" aboutText="About US"/>
      <div className="container my-3">
        <TextForm headings="Write here your text like the following:"></TextForm>
      </div>
    </>
  );
}

export default App;
