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
import EditTodoForm from '../Components/editForm';

// let obj

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

    editChangeHandler = (event) => {
        this.setState({
            editIndex: {
                ...this.state.editIndex,
                text: event.target.value
            }
        })
        console.log(console.log(this.state.editIndex, 'ind'))
    }

    editSubmit = () => {
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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.newValue) return;
        this.addTodo(this.state.newValue);
        this.setState({
            newValue: ''
        })
    }

    removeTodo = (event) => {
        console.log(event)
        const remove = this.state.todos.splice(event, 1)
        this.setState({ remove })
    }


    render() {
        return (
            <div>
                {this.state.isEdit ? <EditTodoForm
                    onSubmit={this.editSubmit}
                    onValue={this.state.editIndex.text}
                    editChange={this.editChangeHandler}
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
                        <Todo
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
