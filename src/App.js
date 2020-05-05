import React from 'react';
import logo from './logo.svg';
import './App.css';

const todosList = ["todo1", "todo2", "todo3"];

function App() {
  const TodosList = todosList.map(todo => {
    return <li>{todo}</li>
  });
  return (
    <ul>{TodosList}</ul>
  );
}

export default App;
