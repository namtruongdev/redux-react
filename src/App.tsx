import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './reducers/rootReducer';
import { CountActions } from './actions';
import './App.css';

const App = () => {
  const { count } = useSelector((state: AppState) => state.count);
  const countDispatch = useDispatch<Dispatch<CountActions>>();

  const handleIncrement = () => {
    countDispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    countDispatch({ type: 'decrement' });
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleIncrement}>Tăng 1 đơn vị</button>
      <button onClick={handleDecrement}>Giảm 1 đơn vị</button>
    </div>
  );
};

export default App;
