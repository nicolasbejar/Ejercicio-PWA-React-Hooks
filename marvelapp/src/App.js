import React from 'react';
import logo from './logo.svg';
import './App.css';
import Marvel from './components/marvel';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Marvel Heroes</h1>
        <div className="row"> 
          <Marvel/>
        </div>
      </div>
    </div>
  );
}

export default App;
