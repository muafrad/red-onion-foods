import React from 'react';
import Foods from './Foods';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import './styles/App.css';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Foods />
      <Footer />
    </div>
  );
}

export default App;
