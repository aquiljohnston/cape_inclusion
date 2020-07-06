import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contents from './components/Contents';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
