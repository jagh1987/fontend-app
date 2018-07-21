export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      //console.log("value: "+state+1);
      return [ ...state, state + 1];
    case 'DECREMENT':
      //console.log("value: "+state-1);
      return [ ...state, state - 1];
    default:
      return state;
  }
};
