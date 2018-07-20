//Dependencies
import React, { Component } from 'react';

//Assets
//import './css/Content.css';
const __API_BASE_DOMAIN__= 'http://jagh1987.000webhostapp.com/';
const __ALL_USERS_API__ = __API_BASE_DOMAIN__+'User';
//const __GET_USER_API__ = __API_BASE_DOMAIN__+'User/';
const __DEL_USER_API__ = __API_BASE_DOMAIN__+'User';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responses: [],
      isLoading: false,
      error: null
    };
    this.deleteUserClick= this.deleteUserClick.bind(this);
    this.viewUserClick= this.viewUserClick.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    //Call to get All user api
    fetch(__ALL_USERS_API__, {method: 'GET'})
    .then(response => {
      if (response.ok)
      {
        return response.json();
      } 
      else 
      {
        throw new Error('Something went wrong ...');
      }
    })
      .then(data => this.setState({ responses: data.response, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  deleteUserClick(e){
    console.log(__DEL_USER_API__+e.target.id+" delete user "+e.target.id);

    //Call to get All user api
    fetch(__DEL_USER_API__ + '/' + e.target.id, {method: 'DELETE'})
    .then(response => response.json());
  }
  viewUserClick(e){
    console.log("View user "+e.target.id);
  }


   render() {
    const { responses, isLoading, error } = this.state;
    
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="Content container">
        <h2>User List</h2>
        <table className="table table-bordered table-hover table-stripped">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {responses.map(response =>
            <tr key={response.id}>
              <td>{response.id}</td>
              <td>{response.userName}</td>
              <td>{response.Name}</td>
              <td>{response.LastName}</td>
              <td>
                <a id={response.id} href="#"target="_self" className="btn btn-primary" onClick={this.viewUserClick} title="View Details" rel="noopener noreferrer">View</a>
                <a id={response.id} href="#" target="_self" className="btn btn-danger" onClick={this.deleteUserClick} title="Delete This User" rel="noopener noreferrer">Delete</a>					
                </td>
            </tr>
          )}
            
            <tr>
                <td colSpan="5">No user registered yet. Please: <a href="addUserForm" target="_self" className="btn btn-primary" title="Add New User">Add New User</a></td>
              </tr>
              </tbody>
            </table>
            
            </div> 
    );
  }
}

export default Home;