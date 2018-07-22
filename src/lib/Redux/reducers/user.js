//Reducer Initial State
const initialState = { userId: 1 };

//Reducer
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET':
      return {
        userId: state.count + 1
      };
    case 'DECREMENT':
      return {
        userId: state.count - 1
      };
    default:
      return state;
  }
};