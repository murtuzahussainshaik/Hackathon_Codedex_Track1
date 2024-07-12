import React from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import HeroSection from './components/HeroSection';
import Games from './components/Games';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <HeroSection/>
        <Games/>
      </main>
      <footer>
        <p>sipnplaynyc@gmail.com</p>
        <p>718-971-1684</p><br />




        <p>©2020 by Sip & Play</p>
      </footer>
    </div>
  );
}

export default App;




