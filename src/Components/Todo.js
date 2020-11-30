// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

// function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
//     const [edit, setEdit] = useState({
//         id: null,
//         value: ''
//     });

//     const submitUpdate = value => {
//         updateTodo(edit.id, value)
//         setEdit({
//             id: null,
//             value: '',
//         })
//     }

//     if (edit.id) {
//         return <TodoForm edit={edit} onSubmit={submitUpdate} />
//     }

//     return todos.map((todo, index) => (
//         <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
//             <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//                 {todo.text}
//             </div>
//             <div className='icon'>
//                 <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
//                 <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
//             </div>
//         </div >
//     ))
// }

// export default Todo
import '../App.css'
function Todo(props) {
    return (
        <div>
            <p className="todo-list"
                onDoubleClick={props.onDoubleClick}
            >
                {props.todo.text}
            </p>
            <button className="btn" onClick={props.removeTodo}>X</button>
        </div>
    )
}

export default Todo;
