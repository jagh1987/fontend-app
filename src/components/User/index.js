//Dependencies
import React, {Component} from 'react';
import UserForm from './userForm';
import QuestionForm from './questionForm';
import {connect} from 'react-redux';

class User extends Component {

    constructor(props) {
        super(props);
        var queryString= new URLSearchParams(window.location.search).get("id");
        var Id= (queryString!=null)? parseInt(queryString) : 0;

        (Id>0)? this.props.dispatch({ type: 'DISABLE' }):this.props.dispatch({ type: 'ENABLE' });

        this.state = {userId: Id};        
        this.toggleIdUserForm = this.toggleIdUserForm.bind(this);
    }
    toggleIdUserForm() {
        this.setState(state => ({
            userId: state.userId
        }));
    }
    componentDidMount() {
        this.toggleIdUserForm();
    }
    render() {
        const { userId }= this.state;
        
        return (
            <div className = "container">
                Disabled {''+this.props.disabled}
                <UserForm userId={ userId} readonly={this.props.disabled}></UserForm>
                <QuestionForm userId={userId}></QuestionForm>
            </div>
        );
    }
}
//export default User;
const mapStateToProps= state =>({
    disabled: state.appForms.disabled
  });
  export default connect(mapStateToProps)(User);