//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {  
  static propTypes ={
    copyright:PropTypes.string
  };
   render() {
    const { copyright= 'Developed by jagh1987 React App 2018'}= this.props;
    return (
      <div className="Footer">
      <div className="container">
        <p className="text-light text-center"><a href="https://www.linkedin.com/in/jagh1987/" target="_blank" rel="noopener noreferrer">{copyright}</a></p>
      </div>
      </div>
    );
  }
}

export default Footer;