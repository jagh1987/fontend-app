//Dependencies
import React, {Component} from 'react';
import UserForm from './userForm';
import QuestionForm from './questionForm';

class User extends Component {

    constructor(props) {
        super(props);
        const Id= new URLSearchParams(window.location.search).get("id");
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
                <h3> User Details { userId } </h3>
                <UserForm userId={ userId}></UserForm>
                <QuestionForm userId={userId}></QuestionForm>
            </div>
        );
    }
}
export default User;