//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../lib/Constants/';

class UserForm extends Component {
    
  static propTypes={ idUser: PropTypes.string.isRequired };
  constructor(props) {
      super(props);
      this.state = {
        response: [],
          isLoading: false,
          readOnly: false,
          error: null
        };
        //this.handleInputChange = this.handleInputChange.bind(this);
  }/*
    handleInputChange(event) {
        alert('');
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }*/
    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        console.log(ApiConstants.__GET_USER_API__+this.props.idUser);
        const userId= new URLSearchParams(window.location.search).get("id");
        fetch(ApiConstants.__GET_USER_API__+userId, {method: 'GET'})
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
          .then(data => this.setState({ response: data.response, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    };
    render() {
//        const {idUser}= this.props;
        const {response, readOnly, error}= this.state;        
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="card">
                
                <div className="card-body" key={response.id}>
                    <div className="form-group">
                        <input type="submit" value="UpdateUser..." className="btn btn-primary float-right" />
                    </div>
                    <div className="form-group">
                        <label for="userid">id</label>
                        <input type="text" readOnly={readOnly} name="userid" value={response.id} placeholder="User Id" className="form-control" disabled="disabled" />
                    </div>
                    <div className="form-group">
                        <label for="userName">User Name</label>
                        <input type="text" readOnly={readOnly} name="userName" value={response.userName} placeholder="User Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="Name">Name</label>
                        <input type="text" readOnly={readOnly} name="Name" value={response.Name} placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="LastName">Last Name</label>
                        <input type="text" readOnly={readOnly} name="LastName" value={response.LastName} placeholder="Last Name" className="form-control" />
                    </div>
                </div>
            </div>            
        </form>
      );
    }
  }
export default UserForm;