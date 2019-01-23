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

  handleClose = () => {
    this.setState({
        address: null,
        location: null,
    });
  }

  handleSearch = async (cep) => {
    const responseAddress = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const address = await responseAddress.json();
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.gia}+${address.logradouro},+${address.city},+${address.uf}&key=AIzaSyAuf_OHJWTlUcpsMUV4yqi3TBeLq0JhVAU`);
    const { results } = await response.json();
    const location = results[0].geometry.location;
    this.setState({ address, location });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="container">
            <Search
              handleSearch={this.handleSearch}
            ></Search>
          </div>
        </header>
        <main className="app-main">
          <div className="container">
            <Result
              address={this.state.address}
              location={this.state.location}
              handleClose={this.handleClose}
            ></Result>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
