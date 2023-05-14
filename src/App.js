import React from 'react';
import './App.scss';
import Footer from './Components/Footer';
import RoutesTree from './Components/RoutesTree';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesTree />
      <Footer />  
    </div>
  );
}


export default App;
