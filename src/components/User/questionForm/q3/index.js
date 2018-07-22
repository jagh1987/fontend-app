import React from 'react'
import { Field } from 'redux-form'
//import * as ApiConstants from '../../../../lib/Constants/';
let Question3Form = props => {
  const { userId } = props

  return (
      <div >
        <h3 className="text-center">User {userId} Escriba la respuesta correcta</h3>
        <br />
        <div className="row">
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticYou" className="sr-only">You</label>
                        <input type="text" readonly="readonly" className="form-control-plaintext text-right" id="staticYou" value="You"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="txt1" className="sr-only"></label>
                        <Field type="text" name="txt1" id="txt1" placeholder="please complete" className="form-control is-valid" onKeyUp="return $(this).val($(this).val().toLowerCase())" pattern="[a-zA-Z]+" component="input"/>                    
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticA" className="sr-only">a</label>
                        <input type="text" readonly="readonly" className="form-control-plaintext text-right" id="staticA" value="a" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="txt1" className="sr-only"></label>
                        <Field type="text" name="txt2" id="txt2" placeholder="please complete" className="form-control is-valid" onKeyUp="return $(this).val($(this).val().toLowerCase())" pattern="[a-zA-Z]+" component="input" />
                    </div>
                </div>                            
            </div>
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticHe" className="sr-only">He</label>
                        <input type="text" readonly="readonly" className="form-control-plaintext text-right" id="staticHe" value="He"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <Field type="text" name="txt3" id="txt3" placeholder="please complete" className="form-control is-valid" onKeyUp="return $(this).val($(this).val().toLowerCase())" pattern="[a-zA-Z]+"  component="input"/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticA2" className="sr-only">a</label>
                        <input type="text" readonly="readonly" className="form-control-plaintext text-right" id="staticA2" value="a"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <Field type="text" name="txt4" id="txt4" placeholder="please complete" className="form-control is-valid" onKeyUp="return $(this).val($(this).val().toLowerCase())" pattern="[a-zA-Z]+"  component="input"/>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticThey" className="sr-only">They</label>
                        <input type="text" readonly="readonly" className="form-control-plaintext text-right" id="staticThey" value="They"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <Field type="text" name="txt5" id="txt5" placeholder="please complete" className="form-control is-valid" onKeyUp="return $(this).val($(this).val().toLowerCase())" pattern="[a-zA-Z]+" component="input"/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticgirls" className="sr-only">girls</label>
                        <input type="text" className="form-control-plaintext text-left" id="staticgirls" value="girls"/>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="form-inline mx-auto">
                    <div className="form-group mb-2">
                        <label for="staticShe" className="sr-only">She</label>
                        <input type="text" readonly="readonly" className="form-control-plaintext text-right" id="staticShe" value="She" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <Field type="text" name="txt6" id="txt6" placeholder="please complete" className="form-control is-valid" onKeyUp="return $(this).val($(this).val().toLowerCase())" pattern="[a-zA-Z]+" component="input"/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="staticagirl" className="sr-only">a girl</label>
                        <input type="text" className="form-control-plaintext text-left" id="staticagirl" value="a girl" />
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
export default Question3Form