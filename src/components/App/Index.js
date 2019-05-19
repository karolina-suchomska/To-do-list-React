import React from 'react';
import './Index.css';
import Todo from '../Todo/Index';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do-list</h1>
        <Todo />
      </header>
    </div>
  );
}
