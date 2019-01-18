import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <h1 className="title">Consultar</h1>
        <div className="form-group">
          <label htmlFor="search">CEP</label>
          <input id="search" type="text" placeholder="02050010" />
          <button type="button">Buscar</button>
        </div>
      </div>
    );
  }
}

export default Search;
