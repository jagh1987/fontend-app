//Reducer Initial State
const initialState = { disabled: false };

//Reducer
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ENABLE':
      return {
        disabled: false
      };
    case 'DISABLE':
      return {
        disabled: true
      };
    default:
      return state;
  }
};