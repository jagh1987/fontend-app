//Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
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
            disabled: false
        }
        //this.handleSubmit= this.handleSubmit(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onClickUpdate= this.onClickUpdate.bind(this);
        this.onClickPreventDefault = this.onClickPreventDefault.bind(this);
 }
 
 onClickPreventDefault(e) {
    this.setState({ userId: this.props.userId, isLoading: true, disabled: this.props.disabled });
    this.props.dispatch({ type: 'ENABLE' })    
    e.preventDefault();
  }
  onClickUpdate(e)
  {
    e.preventDefault();
  }
    handleInputChange(event) {
        //console.log('changed input= '+event.target.id+' value= '+event.target.value);
    }
    handleSubmit(e) {
        //const { userId } = this.props;
        //console.log('changed input= '+event.target);
        //e.preventDefault();
    }
    componentDidMount() {        
        const { userId } = this.props;
        this.setState({ userId: this.props.userId, isLoading: true, disabled: this.props.disabled });
        //this.state.userId= userId;        
        //const {response, readOnly}= this.state;    
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

          //Use Redux to manage the status form (ENABLE OR DISABLE FIELDS)
          (userId>0)?this.props.dispatch({ type: 'DISABLE' }):this.props.dispatch({ type: 'ENABLE' });
          console.log(this.props.disabled);
    };
    render() {
        const {userId, userData, disabled } = this.state;
        var disableString= (disabled)? "disabled" : "";
        var editDisplay= (disabled===true)? 'visible':'hidden';
        var saveDisplay= (disabled!==false)?'visible':'hidden';

      return (
          <form id="_userForm" onSubmit={this.handleSubmit}>
            <div className="card">                
                <div className="card-body" key={userData.id}>
                    <input type="submit" value={(userId>0)?"UpdateUser...":"Save User"} className="btn btn-primary float-right" onCick={this.onClickUpdate} style={{display:saveDisplay}}/>
                    <input type="submit" value={"Edit"} className="btn btn-primary float-right" style={{display:editDisplay}} onCick={this.onClickPreventDefault}/>
                    <div className="form-group">                        
                        <h5 className="card-title">User Form</h5>                        
                    </div>
                    <div className="form-group">
                        <label>id</label>
                        <input type="text" name="userid" id="userid" value={userData.id} placeholder="User Id" className="form-control" disabled= {disableString}/>
                    </div>
                    <div className="form-group">
                        <label>User Name </label>
                        <input type="text" name="userName" id="userName" value={userData.userName} placeholder="User Name" className="form-control" disabled= {disableString}/>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="Name" id="Name" value={userData.Name} placeholder="Name" className="form-control" disabled= {disableString} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="LastName" id="LastName" value={userData.LastName} placeholder="Last Name" className="form-control" disabled= {disableString} />
                    </div>
                </div>
            </div>
            <br />
        </form>
      );
    }
  }
//export default UserForm;
const mapStateToProps= state =>({
    disabled: state.appForms.disabled
  });
  export default connect(mapStateToProps)(UserForm);