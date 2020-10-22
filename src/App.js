import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <p>{props.count}</p>
      <button onClick={props.increment}>Tăng 1 đơn vị</button>
      <button onClick={props.decrement}>Giảm 1 đơn vị</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
