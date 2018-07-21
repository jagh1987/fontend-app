//Dependencies
import React, {Component} from 'react';
import UserForm from './userForm';
import QuestionForm from './questionForm';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {userId: 0};

        this.toggleIdUserForm = this.toggleIdUserForm.bind(this);
    }
    toggleIdUserForm() {
        this.setState(state => ({
            userId: !state.userId
        }));
     }

    componentDidMount() {
        const userId= new URLSearchParams(window.location.search).get("id");
        this.setState({ userId: userId });
        console.log("UserForm passing value= "+this.state.userId);

        this.toggleIdUserForm();
    }
    render() {
        return (
            <div className = "container">
                <h3> User Details { this.state.userId } </h3>
                <UserForm idUser={this.state.userId}></UserForm>
                <QuestionForm idUser={this.state.userId}></QuestionForm>
            </div>
        );
    }
}
export default User;