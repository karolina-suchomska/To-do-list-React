import React from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do-list</h1>
        <Todo />
      </header>
    </div>
  );
}

export default App;
