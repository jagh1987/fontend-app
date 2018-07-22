import React from 'react'
import { Field } from 'redux-form'

let Question1Form = props => {
  const { userId } = props
  
  return (
    <div class="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h3 class="text-center">Usuario {userId} Seleccione la respuesta correcta</h3>
    <br />
    <div class="row">
        <div class="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div class="row">
                <div class="col">
                    <p class="lead text-right"><strong>You</strong></p>
                </div>
                <div class="col">
                    <Field class="form-control is-valid" name="sel1" id="sel1" onchange="validateForm()" component="select">
                        <option>seleccione</option>
                        <option>are</option>
                        <option>am</option>
                        <option>is</option>
                    </Field>
                </div>
                <div class="col">
                    <p class="lead text-left"><strong>a man</strong></p>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div class="row">
                    <div class="col">
                        <p class="lead text-right"><strong>He</strong></p>
                    </div>
                    <div class="col">
                        <Field class="form-control is-valid" name="sel2" id="sel2" onchange="validateForm()" component="select">
                            <option>seleccione</option>
                            <option>am</option>
                            <option>is</option>
                            <option>are</option>
                        </Field>
                    </div>
                    <div class="col">
                        <p class="lead text-left"><strong>a boy</strong></p>
                    </div>
                </div>
        </div>
    </div>
    <div class="row">
    <div class="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div class="row">
                <div class="col">
                    <p class="lead text-right"><strong>They</strong></p>
                </div>
                <div class="col">
                    <Field class="form-control is-valid" name="sel3" id="sel3" onchange="validateForm()" component="select">
                        <option>seleccione</option>
                        <option>am</option>
                        <option>is</option>
                        <option>are</option>
                    </Field>
                </div>
                <div class="col">
                    <p class="lead text-left"><strong>girls</strong></p>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-lg-6 col-md-12 col-xs-12">
            <div class="row">
                    <div class="col">
                        <p class="lead text-right"><strong>She</strong></p>
                    </div>
                    <div class="col">
                        <Field  class="form-control is-valid" name="sel4" id="sel4" onchange="validateForm()" component="select">
                            <option>seleccione</option>
                            <option>is</option>
                            <option>am</option>
                            <option>are</option>
                        </Field >
                    </div>
                    <div class="col">
                        <p class="lead text-left"><strong>a girl</strong></p>
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}
export default Question1Form