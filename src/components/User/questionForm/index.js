//Dependencies
import React, {Component} from 'react';
import Question1Form from './q1';
import Question2Form from './q2';
import Question3Form from './q3';
import { reduxForm } from 'redux-form';
//import { Values } from "redux-form-website-template";
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../lib/Constants/';

class QuestionForm extends Component {
    static propTypes={
        userId: PropTypes.number.isRequired
      };
    constructor(props) {
        super(props);
        //state = {userId: 0};
    }
    componentDidMount() {
    }
    render() {
        const { userId } = this.props;

        if(userId>0)
        {
            return (
                <form action={ApiConstants.__API_BASE_DOMAIN__+"/aswer"} method="post" acceptCharset="utf-8">
        <div class="card">
            <div class="card-body">
                <input type="submit" value="Save" class="btn btn-primary float-right"/>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Question1Form userId={userId} />
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Question2Form userId={userId} />
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <Question3Form userId={userId} />
                    </div>
                </div>
                <br />
                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">3</a>
                    </li>
                </ul>
            </div>
        </div>    
        </form>    
    );
        }
        else
        {
            return (
                <div class="alert alert-primary" role="alert">
                    Please fill user form
                </div>
            );
        }        
    }
}
QuestionForm = reduxForm({form: 'QuestionForm'})(QuestionForm)
export default QuestionForm;