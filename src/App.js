import React, { Component } from 'react';
import Projects from './pages/Projects';
import Header from './components/Header';
import Bio from './pages/Bio';
import FormPage from './pages/Form';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Bio />
        <FormPage />
        <Footer />
      </div>
    );
  }
}

export default App;
