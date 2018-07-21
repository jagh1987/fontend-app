//Reducer Initial State
const initialState = { idUser: 1 };

//Reducer
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET':
      return {
        idUser: state.count + 1
      };
    case 'DECREMENT':
      return {
        idUser: state.count - 1
      };
    default:
      return state;
  }
};