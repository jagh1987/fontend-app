import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//Assets
import logo from './images/logo.svg';
import './css/Header.css';


class Header extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
   render() {
     const {title, items}= this.props;
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">{title}</h2>
        </header>        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <a className="navbar-brand" href="/#">Menu</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
              <ul className="navbar-nav">
                {
                  items && items.map(
                    (items,key)=><li key={key} className="nav-item">
                  <Link className="nav-link" to={items.url}>{items.title}</Link></li>)}
              </ul> 
          </div>          
        </div>
        </nav>
      </div>
    );
  }
}

export default Header;