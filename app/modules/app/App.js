import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <div className="app">
        <Header />
        {this.props.children}
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;