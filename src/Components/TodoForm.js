// import React, { useState, useEffect, useRef } from 'react'

// function TodoForm(props) {
//     const [input, setInput] = useState('');

//     const inputRef = useRef(null)

//     useEffect(() => {
//         inputRef.current.focus()
//     })

//     const handleChange = e => {
//         setInput(e.target.value);
//     }

//     const handleSubmit = e => {
//         e.preventDefault();

//         props.onSubmit({
//             id: Math.floor(Math.random() * 1000),
//             text: input,
//         });

//         setInput('')
//     }

//     return (
//         <form className="todo-form" onSubmit={handleSubmit}>
//             <input type="text" placeholder="Enter text" value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef} />
//             <button className='todo-button'>Add</button>
//         </form>
//     )
// }

// export default TodoForm
import '../App.css'
function TodoForm(props) {
    return (
        <div>
            <h1>Todo List</h1>
            <form className="form-todo" onSubmit={props.onSubmit}>
                <input type="text" placeholder="type here..."
                    value={props.onValue}
                    onChange={props.onValueChange}
                />
                <button className="btn" onClick={props.onClick}>Add</button>
            </form>
            <br />
            <br />
        </div>
    )
}

export default TodoForm;
