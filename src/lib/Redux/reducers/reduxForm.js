import { reducer as reduxFormReducer } from 'redux-form';

const reduxForm = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

export default reduxForm;