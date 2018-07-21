//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../lib/Constants/';

class QuestionForm extends Component {

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
            <form action="" method="post" accept-charset="utf-8">
            
            </form>

        );
    }
}
export default QuestionForm;