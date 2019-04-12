import React, { Component } from 'react';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';
import Footer from './content/Footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
