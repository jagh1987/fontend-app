import React, {Component} from 'react'
//import { input } from 'redux-form'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as ApiConstants from '../../../../lib/Constants/';

class Question3Form extends Component {
    static propTypes={ userId: PropTypes.number.isRequired};
    constructor(props) {
        super(props);
        //const Id= new URLSearchParams(window.location.search).get("id");
        this.state = {
            userId: 0, 
            response: [],
            isLoading: false, 
            error: null, 
            disabled: false
        };
        
    }
    
    componentDidMount() {        
        const { userId } = this.props;
        this.setState({ userId: userId, isLoading: true , disabled: this.props.disabled});
        const questionNumber= 3;
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
    render() {
        const {userId, response, isLoading, error, disabled } = this.state;
        
        var disableString= (disabled)? "disabled" : "";   
        console.log("-- "+ApiConstants.__GET_ANSWERS_API__+'/'+userId+'/'+3+" --");
        console.log(response);
        console.log("--------------------------------------------------------------------");
               
        
        if (error) {
            return <div className="alert alert-danger" role="alert">{error.message}</div>;
        }
        if (isLoading) {
            return <div className="alert alert-info" role="alert">Loading ...</div>;
        }
        return (
            <div >
        <h3 className="text-center">User {userId} Escriba la respuesta correcta</h3>
        <br />
        <div className="row">
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticYou" className="sr-only">You</label>
                        <input type="text" readOnly="readonly" id="txt1" className="form-control-plaintext text-right" id="staticYou" value="You"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="txt1" className="sr-only"></label>
                        <input type="text"  disabled= {disableString} name="txt1" id="txt1" value={response.txt1} placeholder="please complete" className="form-control is-valid" pattern="[a-zA-Z]+"/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticA" className="sr-only">a</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-right" id="staticA" value="a" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="txt1" className="sr-only"></label>
                        <input type="text"  disabled= {disableString} name="txt2" id="txt2" value={response.txt2} placeholder="please complete" className="form-control is-valid" pattern="[a-zA-Z]+" />
                    </div>
                </div>                            
            </div>
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticHe" className="sr-only">He</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-right" id="staticHe" value="He"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  disabled= {disableString} name="txt3" id="txt3" value={response.txt3} placeholder="please complete" className="form-control is-valid" pattern="[a-zA-Z]+" />
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticA2" className="sr-only">a</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-right" id="staticA2" value="a"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  disabled= {disableString} name="txt4" id="txt4" value={response.txt4} placeholder="please complete" className="form-control is-valid" pattern="[a-zA-Z]+" />
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticThey" className="sr-only">They</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-right" id="staticThey" value="They"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  disabled= {disableString} name="txt5" id="txt5" value={response.txt5} placeholder="please complete" className="form-control is-valid" pattern="[a-zA-Z]+"/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticgirls" className="sr-only">girls</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-left" id="staticgirls" value="girls"/>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticShe" className="sr-only">She</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-right" id="staticShe" value="She" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"  disabled= {disableString} name="txt6" id="txt6" value={response.txt6} placeholder="please complete" className="form-control is-valid" pattern="[a-zA-Z]+"/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticagirl" className="sr-only">a girl</label>
                        <input type="text" readOnly="readonly" className="form-control-plaintext text-left" id="staticagirl" value="a girl"/>
                    </div>
                </div> 
            </div>
        </div>
    </div>
        );
    }
}
//export default Question3Form;

const mapStateToProps= state =>({
    disabled: state.appForms.disabled
});
export default connect(mapStateToProps)(Question3Form);