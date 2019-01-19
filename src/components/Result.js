import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    const { props: { address } } = this;

    return (
      <div className="result" style={{ display: address ? 'block' : 'none' }}>
        <button type="button" className="close">Close</button>

        <address className="address">
          <span>{address && address.logradouro}</span><br />
          {address && address.bairro}<br />
          {address && `${address.localidade} - ${address.uf}`}<br />
          {address && address.cep}
        </address>
        <div className="map">
          Map
        </div>

        <pre></pre>
      </div>
    );
  }
}

export default Result;
