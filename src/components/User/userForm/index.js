//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../lib/Constants/';

class UserForm extends Component {
    
    static propTypes={ userId: PropTypes.number.isRequired};
    
  constructor(props) {
      super(props);
      
      this.state = {
            userId:0,
            userData: [],
            isLoading: false,
            error: null,
            readOnly: false
        }
        this.handleSubmit= this.handleSubmit(this);
        this.handleInputChange = this.handleInputChange.bind(this);
 }
    handleInputChange(event) {
        //console.log('changed input= '+event.target.id+' value= '+event.target.value);
    }
    handleSubmit(event) {
        //const { userId } = this.props;
        //console.log('changed input= '+event.target);
    }
    componentDidMount() {        
        const { userId } = this.props;
        this.setState({ userId: userId, isLoading: true });
        //this.state.userId= userId;
        
        const {response, readOnly}= this.state;    
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
          .then(data => this.setState({ userData: data.response, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    };
    render() {
        const {userId, userData, isLoading, error, readOnly } = this.state;
        //console.log("-- "+ApiConstants.__GET_USER_API__+'/'+userId+" --");
        //console.log(response);
        //console.log("--------------------------------------------------------------------");
      return (
          <form id="_userForm" onSubmit={this.handleSubmit}>
            <div className="card">                
                <div className="card-body" key={userData.id}>
                    <input type="submit" value={(userId>0)?"UpdateUser...":"Save User"} className="btn btn-primary float-right" />
                    <div className="form-group">                        
                        <h5 class="card-title">User Form</h5>                        
                    </div>
                    <div className="form-group">
                        <label for="userid">id</label>
                        <input type="text" readOnly={readOnly} name="userid" id="userid" value={userData.id} placeholder="User Id" className="form-control" disabled="disabled" />
                    </div>
                    <div className="form-group">
                        <label for="userName">User Name</label>
                        <input type="text" readOnly={readOnly} name="userName" id="userName" value={userData.userName} placeholder="User Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="Name">Name</label>
                        <input type="text" readOnly={readOnly} name="Name" id="Name" value={userData.Name} placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="LastName">Last Name</label>
                        <input type="text" readOnly={readOnly} name="LastName" id="LastName" value={userData.LastName} placeholder="Last Name" className="form-control" />
                    </div>
                </div>
            </div>
            <br />
        </form>
      );
    }
  }
export default UserForm;