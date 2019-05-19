import React, { Component } from 'react';
import TodoInput from '../TodoInput/Index';
import TodoList from '../TodoList/Index';
import './Index.css'

class Todo extends Component {
    state = {
        todos: [],
        todoShow: 'all',
        allComplete: true,
    };

    addTodo = todo => {
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))
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

    updateTodo = e => {
        this.setState({
            todoShow: e
        })
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
                complete: this.state.allComplete
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
                    <button onClick={() => this.updateTodo('all')} >All</button>
                    <button onClick={() => this.updateTodo('active')} >Active</button>
                    <button onClick={() => this.updateTodo('complete')} >Complete</button>
                    <div>
                       {this.state.todos.filter(todo => todo.complete).length ? (
                        <span>
                            <button onClick={this.handleAllDeleteTodo}>Delete all complete todo</button>
                        </span>
                    ) : null}  
                    <button onClick={this.handleAllComplete}>Complete all</button>  
                    </div>
                </div>
               <TodoInput onSubmit={this.addTodo} />
               {todos.map(todo => (
                   <TodoList 
                    key={todo.id} 
                    changeComplete={() => this.changeComplete(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todo={todo} />
               ))}             
            </div>
        );
    }
}
 
export default Todo;