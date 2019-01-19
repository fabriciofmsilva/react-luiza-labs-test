import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import Result from './components/Result';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: null,
    };
  }

  handleSearch(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(address => this.setState({ address }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="container">
            <Search handleSearchClick={this.handleSearch.bind(this)}></Search>
          </div>
        </header>
        <main className="app-main">
          <div className="container">
            <Result
              address={this.state.address}
            ></Result>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
