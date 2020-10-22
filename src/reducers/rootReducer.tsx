import { combineReducers } from 'redux';
import countReducer from './countReducer';

const rootReducer = combineReducers({
  count: countReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
