import React from 'react'
import { Field } from 'redux-form'
import * as ApiConstants from '../../../../lib/Constants/';
let Question2Form = props => {
  const { userId } = props
  return (
      <div>
      <h3 class="text-center">User {userId} Seleccione la respuesta correcta</h3>      
      <p class="lead text-center"><strong>I am a man</strong></p>
      <div class="row">
        <div class="col text-center">
                <label class="check-container">
                    <img src={ApiConstants.__API_BASE_DOMAIN__+"/assets/img/woman.png"} title="woman" id="img-woman" alt="woman" class="img-thumbnail mx-auto d-block"/>
                    <Field type="radio" name="q2" value="woman" id="woman" onchange="validateForm();" component="input"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="col text-center">
                <label class="check-container">
                    <img src={ApiConstants.__API_BASE_DOMAIN__+"/assets/img/man.png"} title="man" id="img-man" alt="man" class="img-thumbnail mx-auto d-block is-valid"/>
                    <Field type="radio" name="q2" value="man" id="man" onchange="validateForm();" component="input"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="col text-center">
                <label class="check-container">
                    <img src={ApiConstants.__API_BASE_DOMAIN__+"/assets/img/boy.png"} title="boy" id="img-boy" alt="boy" class="img-thumbnail mx-auto d-block"/>
                    <Field type="radio" name="q2" value="boy" id="boy" onchange="validateForm();" component="input"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            </div>
            </div>
  )
}
export default Question2Form