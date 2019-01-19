import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  handleSearchClick = () => {
    if (!this.validateSearch()) return;
    this.props.handleSearchClick(this.search.value);
  }

  validateSearch() {
    return this.search.value.length === 8;
  }

  render() {
    return (
      <div className="search">
        <h1 className="title">Consultar</h1>
        <div className="form-group">
          <label htmlFor="search">CEP</label>
          <input
            id="search"
            type="text"
            placeholder="02050010"
            ref={input => this.search = input}
          />
          <button type="button" onClick={this.handleSearchClick}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default Search;
