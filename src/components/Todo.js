import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todoShow: 'all',
            allComplete: true,
            clickButon: 'false',
        };
    }

    addTodo = todo => {
        if(todo.text !== "") {
            this.setState(state => ({
            todos: [...state.todos, todo]
            }))
        }
    }

    changeComplete = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                       ...todo,
                        complete: !todo.complete
                    };
                }
                else {
                    return todo;
                }
            })
        }))
    }

    updateTodo = (e, clickButon) => {
        this.setState({
            todoShow: e,
            clickButon: this.state.clickButon
        },()=>console.log(clickButon))
    }

    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }

    handleAllDeleteTodo = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    }

    handleAllComplete = () => {
        this.setState(state =>({
            todos: state.todos.map(todo => ({
                ...todo,
                complete: state.allComplete
            }))
        }))
    }

    render() { 
        let todos = [];

        if (this.state.todoShow === 'all') {
            todos = this.state.todos;
        }
        else if (this.state.todoShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return ( 
            <div className="todo">
                <div className="todo-done">
                    Tasks to be done: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div className="todo-button-active">
                    <button className="todo-button" onClick={() => this.updateTodo('all')}>All</button>
                    <button className="todo-button" onClick={() => this.updateTodo('active')} >Active</button>
                    <button className="todo-button" onClick={() => this.updateTodo('complete')} >Complete</button> 
                </div>
                <div className="todo-button-complete"> 
                    <button onClick={this.handleAllComplete}>Complete all</button>  
                </div>
               <TodoInput onSubmit={this.addTodo} />
               {todos.map(todo => (
                   <TodoList 
                    key={todo.id} 
                    changeComplete={() => this.changeComplete(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todo={todo} />
               ))} 
               {this.state.todos.filter(todo => todo.complete).length ? (
                    <span className="todo-button-active">
                        <button onClick={this.handleAllDeleteTodo}>Delete all complete todo</button>
                    </span>
                ) : null}             
            </div>
        );
    }
}

export default Todo;