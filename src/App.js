import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="container">
            <Search></Search>
          </div>
        </header>
        <main className="app-main">
          <div className="container">
            <Result></Result>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
