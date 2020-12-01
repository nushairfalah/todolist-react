// import React, { useState } from 'react'
// import TodoForm from './TodoForm'
// import Todo from './Todo';

// function TodoList() {
//     const [todos, setTodos] = useState([])

//     const addTodo = todo => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//             return
//         }

//         const newTodos = [todo, ...todos]

//         setTodos(newTodos);
//         console.log(todo, ...todos)
//     }

//     const updateTodo = (todoId, newValue) => {
//         if (!newValue.text || /^\s*$/.test(newValue.text)) {
//             return;
//         }

//         setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
//         );
//     }

//     const removeTodo = id => {
//         const removeArr = [...todos].filter(todo => todo.id !== id)

//         setTodos(removeArr)
//     }

//     const completeTodo = id => {
//         let updatedTodos = todos.map(todo => {
//             if (todo.id === id) {
//                 todo.isComplete = !todo.isComplete
//             }
//             return todo
//         })
//         setTodos(updatedTodos);
//     }

//     return (
//         <div>
//             <h1>Test Todo List Project</h1>
//             <TodoForm onSubmit={addTodo} />
//             <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
//         </div>
//     )
// }

// export default TodoList

import React, { useRef } from 'react';
import '../App.css'
import Todo from '../Components/Todo';
import TodoForm from '../Components/TodoForm';
import EditTodoForm from '../Components/editForm'
import useDoubleClick from "use-double-click"

// let obj


const List = ({ onDouble, obj, removeTodo }) => {
    console.log(obj, 'this onject')
    const buttonRef = useRef()

    useDoubleClick({
        onDoubleClick: () => {
            onDouble(obj)
        },
        ref: buttonRef
    })

    // return <p ref={buttonRef}>{obj.text}</p>
    return <div>
        <li ref={buttonRef} className="todo-list"
        >
            {obj.text}
        </li>
        <button className="btn-todo" onClick={removeTodo}>X</button>
    </div>
}

class TodoList extends React.Component {
    state = {
        todos: [
            { text: 'List 1' }, { text: 'List 2' }, { text: 'List 3' },
        ],
        newValue: '',
        isEdit: false,
        editIndex: {},
        idEdit: {}
    }

    setTodos = (event) => this.setState({ todos: event });

    addTodo = (event) => {
        const newTodos = this.state.todos.concat({ text: event })
        this.setTodos(newTodos)
        console.log(newTodos)
    };

    changeHandler = (event) => {
        const todo = event.target.value
        this.setState({
            newValue: todo
        })
        // console.log(event)
    }


    // doubleClick = (event,) => {
    //     console.log(event, 'double')
    //     obj = event.target.innerHTML
    //     this.setState({
    //         isEdit: !this.state.isEdit,
    //         editIndex: event.target.innerHTML
    //     })
    //     console.log(event)
    // }

    removeTodo = (event) => {
        console.log(event)
        const remove = this.state.todos.splice(event, 1)
        this.setState({ remove })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.newValue) return;
        this.addTodo(this.state.newValue);
        this.setState({
            newValue: ''
        })
    }




    render() {
        return (
            <div>
                {this.state.isEdit ? <EditTodoForm
                    onSubmit={() => {
                        console.log(this.state.editIndex, 'ind')
                        // const testData = 'halo'
                        const newData = this.state.todos.map((val, index) => {
                            if (index === this.state.idEdit) {
                                return this.state.editIndex
                            }

                            return val
                        })
                        this.setState({
                            todos: newData,
                            newValue: '',
                            isEdit: false
                        })
                    }}
                    onValue={this.state.editIndex.text}
                    // onValue={obj}

                    editChange={(e) => {
                        this.setState({
                            editIndex: {
                                ...this.state.editIndex,
                                text: e.target.value
                            }
                        })
                        console.log(console.log(this.state.editIndex, 'ind'))
                    }}
                /> :
                    <TodoForm
                        onSubmit={this.handleSubmit}
                        onValueChange={this.changeHandler}
                        onValue={this.state.newValue}
                        onClick={this.handleSubmit}
                    />
                }

                {this.state.todos.map((todo, index) => (
                    <div key={index}>
                        {/* <Todo

                            todo={todo}
                            onDoubleClick={this.doubleClick}
                            removeTodo={() => this.removeTodo(index)}
                        /> */}
                        <List
                            onDouble={(data) => {
                                console.log(index, 'i')
                                this.setState({
                                    editIndex: data,
                                    isEdit: !this.state.isEdit,
                                    idEdit: index
                                })
                            }}
                            obj={todo}
                            removeTodo={() => this.removeTodo(index)} />
                    </div>
                ))}
            </div>
        )
    }
}

export default TodoList;
