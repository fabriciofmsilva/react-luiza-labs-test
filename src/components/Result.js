import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <button type="button" className="close">Close</button>

        <address className="address">
          <span>Rua Miguel Mentem</span><br />
          Vila Guilherm<br />
          São Paulo - SP<br />
          02050-010
        </address>
        <div className="map">
          Map
        </div>
      </div>
    );
  }
}

export default Result;
