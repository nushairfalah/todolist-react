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

  render() {
    return (
      <div className='App'>
        <h1>Bucket List</h1>
        <TodoList />
      </div>
    )
  }
}

export default App
