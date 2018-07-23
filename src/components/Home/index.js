//Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ApiConstants from '../../lib/Constants/';


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
    fetch(ApiConstants.__ALL_USERS_API__, {method: 'GET'})
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
    console.log(ApiConstants.__DEL_USER_API__ + '/' + e.target.id+" delete user "+e.target.id);
    //Call to get All user api
    fetch(ApiConstants.__DEL_USER_API__ + '/' + e.target.id, {method: 'DELETE',headers: {'Content-type': 'application/json'}})
    .then(response => response.json());
  }
  viewUserClick(e){
    console.log("View user "+e.target.id);
    this.context.router.history.push(ApiConstants.DOMAIN+'/User/?id='+e.target.id);
  }


   render() {
    const { responses, isLoading, error } = this.state;
    
    if (error) {
      return <div className="alert alert-danger" role="alert">{error.message}</div>;
    }
    if (isLoading) {
      return <div className="alert alert-info" role="alert">Loading ...</div>;
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
                <Link id={response.id} className="btn btn-primary"  title="View Details"  to={`/User/?id=${response.id}`}>View</Link>
                <Link id={response.id} className="btn btn-danger"  title="Delete User"  to={`/#`}  onClick={this.deleteUserClick}>Delete</Link>
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