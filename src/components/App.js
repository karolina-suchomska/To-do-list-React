import React from 'react';
import '../Style.scss';
import Todo from './Todo';

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
