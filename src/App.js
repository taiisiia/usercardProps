import React from 'react';
import Card from './Components/Card'
import './App.css'
import avatar from './assets/images/avatar.png';

function App() {
  return (
    <div className = 'App'>
      <Card 
      img={avatar}
      userName = 'John Doe'
      description = 'I am a web developer'
      />
    </div>
  );
}

export default App;
