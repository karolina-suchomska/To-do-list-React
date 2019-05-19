import React, { Component } from 'react';
import uuid from 'uuid';
import './Index.scss';

class TodoInput extends Component {
    state = {
        id: uuid(),
        text: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({
            id: uuid(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })
    }
   
    render() { 
        return ( 
            <div>
               <form className="todo-input" onSubmit={this.handleSubmit}>
                   <span className="todo-input-text">
                        <input 
                            value={this.state.text}
                            onChange={this.handleChange}
                            name="text"
                            placeholder="Add the new todo"
                        /> 
                   </span>
                    <span className="todo-button-add">
                        <button onClick={this.handleSubmit}>Add</button>
                    </span>
               </form>                
            </div>
         );
    }
}
 
export default TodoInput;