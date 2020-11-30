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

import React from 'react';
import '../App.css'
import Todo from '../Components/Todo';
import TodoForm from '../Components/TodoForm';
import EditTodoForm from '../Components/editForm'

let obj

class TodoList extends React.Component {
    state = {
        todos: [],
        newValue: '',
        isEdit: false,
        editIndex: null,
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
        const edit = event.target.value
        this.setState({
            editIndex: edit
        })
    }

    editTerusss = (event) => {
        event.preventDefault();
        const editedTodos = this.state.todos
        editedTodos[this.state.editIndex].todos = this.state.newValue
        this.setState({
            todos: editedTodos, isEdit: false, newValue: ''
        })
    }

    doubleClick = (event) => {
        obj = event.target.innerHTML
        this.setState({
            isEdit: !this.state.isEdit
        })
        console.log(event)
    }

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
                    onSubmit={this.editTerusss}
                    onValueChange={this.editChangeHandler}
                    onValue={obj}
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
                        <Todo
                            todo={todo}
                            onDoubleClick={this.doubleClick}
                            removeTodo={() => this.removeTodo(index)}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default TodoList;
