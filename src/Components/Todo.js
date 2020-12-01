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
import React, { useRef } from 'react';
import '../App.css'
import useDoubleClick from 'use-double-click';

const Todo = ({ onDouble, obj, removeTodo }) => {
    console.log(obj, 'this onject')
    const buttonRef = useRef()

    useDoubleClick({
        onDoubleClick: () => {
            onDouble(obj)
        },
        ref: buttonRef
    })

    // return <p ref={buttonRef}>{obj.text}</p>
    return (
        <div>
            <li ref={buttonRef} className="todo-list">
                {obj.text}
            </li>
            <button className="btn-todo" onClick={removeTodo}>X</button>
        </div>
    )
}

export default Todo;
