import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  handleSearch = () => {
    if (!this.validateSearch()) return;
    this.props.handleSearch(this.search.value.match(/\d+/g).join([]));
    this.search.value = '';
  }

  validateSearch() {
    return this.search.value.length >= 8;
  }

  render() {
    const { props: { value } } = this;

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
            value={value}
          />
          <button type="button" onClick={this.handleSearch}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default Search;
