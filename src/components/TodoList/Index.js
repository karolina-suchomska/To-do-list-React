import React from 'react';

const TodoList = (props) => {
    return ( 
        <div> 
            <div 
                className="todo-list" 
                style={{
                    textDecoration: props.todo.complete ? "line-through" : ""
                }}
                onClick={props.changeComplete}
            >
                {props.todo.text}
            </div>
            <button onClick={props.onDelete}>x</button>
        </div> 
     );
}
 
export default TodoList;