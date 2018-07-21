//Dependencies
import React, { Component } from 'react';
import ProTypes from 'prop-types';

//components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

class RoutedComponent extends Component {
  static ProTypes={ children: ProTypes.object.isRequired }
   render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header title="FrontEnd ReactJs App" items={items}/>
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default RoutedComponent;