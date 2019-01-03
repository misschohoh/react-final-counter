const initialState = {
  count: 0,
  clicked: 0,
  newValue:0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
     case 'INCREMENT':
     return {
       ...state,
       count: state.count + 1,
       clicked: state.clicked + 1
      };
      case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicked: state.clicked + 1 
      };
      ///////reducer will get my a copy of a state and any changes. change count and clicked to new state. 
      case 'CHANGECOUNT':
      return {
        ...state,
        count: state.newValue,
        clicked: (state.clicked = 0)
      };
      case 'NEWVALUE':
      return {
        ...state,
        newValue: parseInt(action.newValue)
      };
      default:
      return state;
  }
}

export default counterReducer;