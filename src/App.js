// import React from 'react'
// import './App.css';
// import TodoList from './Components/TodoList'

// function App() {
//   return (
//     <div className="todo-list">
//       <TodoList />
//     </div>
//   )
// }

// export default App;

import React from 'react';
import './App.css'
import TodoList from './Components/TodoList';

class App extends React.Component {

  // state = {
  //   showTodoList: false
  // }

  // toggleButton = (event) => {
  //   console.log(event)
  //   event.preventDefault();
  //   this.setState({
  //     showTodoList: !this.state.showTodoList
  //   })
  // }

  render() {
    return (
      <div className='App'>
        {/* <button className='button' onClick={this.toggleButton}>{this.state.showTodoList ? "Hide" : "Show"}</button>
        {this.state.showTodoList && <TodoList />} */}
        <TodoList />
      </div>
    )
  }
}

export default App
