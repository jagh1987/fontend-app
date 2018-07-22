import React, {Component} from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../../lib/Constants/';

class Question2Form extends Component {
    static propTypes={ userId: PropTypes.number.isRequired};
    constructor(props) {
        super(props);
        //const Id= new URLSearchParams(window.location.search).get("id");
        this.state = {
            userId: 0, 
            response: [],
            isLoading: false, 
            error: null, 
            readOnly: false
        };
        
    }
    
    componentDidMount() {        
        const { userId } = this.props;
        this.setState({ userId: userId, isLoading: true });
        const questionNumber= 2;
        fetch(ApiConstants.__GET_ANSWERS_API__+'/'+userId+'/'+questionNumber, {method: 'GET'})
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
    }
    render() {
        const {userId, response, isLoading, error, readOnly } = this.state;

        //console.log("-- "+ApiConstants.__GET_ANSWERS_API__+'/'+userId+'/'+2+" --");
        //console.log(response);
        //console.log("--------------------------------------------------------------------");
        return (
            <div>
                <h3 className="text-center">User {userId} Seleccione la respuesta correcta</h3>
                <p className="lead text-center"><strong>I am a man</strong></p>
                <div className="row">
                    <div className="col text-center">
                        <label className="check-container">
                            <img src={ApiConstants.__API_BASE_DOMAIN__+"/assets/img/woman.png"} title="woman" id="img-woman" alt="woman" className="img-thumbnail mx-auto d-block"/>
                            <input type="radio" name="q2" value="man" id="woman" checked={ (response=='woman')? 'checked':'' } onchange="validateForm();" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="col text-center">
                        <label className="check-container">
                            <img src={ApiConstants.__API_BASE_DOMAIN__+"/assets/img/man.png"} title="man" id="img-man" alt="man" className="img-thumbnail mx-auto d-block is-valid"/>
                            <input type="radio" name="q2" value="man" id="man" checked={ (response=='man')? 'checked':'' } onchange="validateForm();" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="col text-center">
                        <label className="check-container">
                            <img src={ApiConstants.__API_BASE_DOMAIN__+"/assets/img/boy.png"} title="boy" id="img-boy" alt="boy" className="img-thumbnail mx-auto d-block"/>
                            <input type="radio" name="q2" value="boy" id="boy" checked={ (response=='boy')?'checked':'' }  onchange="validateForm();"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
export default Question2Form;