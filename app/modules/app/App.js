import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from './components/Header';
import Footer from './components/Footer';
import AuthStore from 'stores/AuthStore';

@observer
class App extends Component {
  render(){

    if (AuthStore.fetching){
      return <div className="app">fetching</div>
    }

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