import React, {Component} from 'react'
//import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../../lib/Constants/';

class Question1Form extends Component {
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
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
    handleSelectChange(event) {
        //console.log('changed input= '+event.target.id+' value= '+event.target.value);     
        //Call External Javascript Function to validate fields   
        window.validateForm();
    }
    componentDidMount() {        
        const { userId } = this.props;
        this.setState({ userId: userId, isLoading: true });
        const questionNumber= 1;
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
          .then(data => this.setState({ response: JSON.parse(data.response), isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    }
    componentWillMount() {        
        //Asincron validation to wait form data ready
        //setTimeout(window.validateForm(), 3000)
    }
    render() {
        const {userId, response, isLoading, error, readOnly } = this.state;
        console.log("-- "+ApiConstants.__GET_ANSWERS_API__+'/'+userId+'/'+1+" --");
        console.log(response);
        console.log("--------------------------------------------------------------------");

        return (
            <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <h3 className="text-center">Usuario {userId} Seleccione la respuesta correcta</h3>
            <br />
    
    <div className="row">
        <div className="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div className="row">
                <div className="col">
                    <p className="lead text-right"><strong>You</strong></p>
                </div>
                <div className="col">
                    <select className="form-control is-valid" name="sel1" id="sel1" value={response.sel1} onChange={this.handleSelectChange} component="select">
                        <option>seleccione</option>
                        <option>are</option>
                        <option>am</option>
                        <option>is</option>
                    </select>
                </div>
                <div className="col">
                    <p className="lead text-left"><strong>a man</strong></p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div className="row">
                    <div className="col">
                        <p className="lead text-right"><strong>He</strong></p>
                    </div>
                    <div className="col">
                        <select className="form-control is-valid" name="sel2" id="sel2" value={response.sel2} onChange={this.handleSelectChange} component="select">
                            <option>seleccione</option>
                            <option>am</option>
                            <option>is</option>
                            <option>are</option>
                        </select>
                    </div>
                    <div className="col">
                        <p className="lead text-left"><strong>a boy</strong></p>
                    </div>
                </div>
        </div>
    </div>
    <div className="row">
    <div className="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div className="row">
                <div className="col">
                    <p className="lead text-right"><strong>They</strong></p>
                </div>
                <div className="col">
                    <select className="form-control is-valid" name="sel3" id="sel3" value={response.sel3} onChange={this.handleSelectChange} component="select">
                        <option>seleccione</option>
                        <option>am</option>
                        <option>is</option>
                        <option>are</option>
                    </select>
                </div>
                <div className="col">
                    <p className="lead text-left"><strong>girls</strong></p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div className="row">
                    <div className="col">
                        <p className="lead text-right"><strong>She</strong></p>
                    </div>
                    <div className="col">
                        <select  className="form-control is-valid" name="sel4" id="sel4" value={response.sel3} onChange={this.handleSelectChange} component="select">
                            <option>seleccione</option>
                            <option>is</option>
                            <option>am</option>
                            <option>are</option>
                        </select >
                    </div>
                    <div className="col">
                        <p className="lead text-left"><strong>a girl</strong></p>
                    </div>
                </div>
        </div>
    </div>
</div>
        );
    }
}
export default Question1Form;