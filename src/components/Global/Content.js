//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
//import './css/Content.css';

class Content extends Component {

  static propTypes= {
    body: PropTypes.object.isRequired
  };
   render() {
    const {body} = this.props;
    
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-3 mb-3">
            {body}
            </div>
        </div>
      </div> 
    );
  }
}

export default Content;