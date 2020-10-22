import { CountActions } from '../actions';

type CountState = {
  count: number;
};

const initState: CountState = {
  count: 0,
};

const countReducer = (state: CountState = initState, action: CountActions) => {
  switch (action.type) {
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default countReducer;
