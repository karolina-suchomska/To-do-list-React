import React from 'react';
import '../style/Style.scss';
import Todo from './Todo';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>To-do-list</h1>
      </header>
      <Todo />
    </div>
  );
}
