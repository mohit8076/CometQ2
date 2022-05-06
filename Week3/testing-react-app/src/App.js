// import './App.css';
// import Todo from './components/todo'

// function App() {
//   const todos = [
//     {id:1 , title : 'wash dishes' , completed : false,},
//     {id:2 , title : 'wash car' , completed : true,},
//   ]
//   return (
//     <div className="App">
//      {
//        todos.map((todo) => {
//          return (<Todo todo ={todo}/>)
//        })
//      }
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Items from './components/Items';

class App extends Component {
  render() {
    const items = [
      'Shark',
      'Dolphin',
      'Octopus'
    ];
    return (
      <Items items={items} />
    );
  }
}

export default App;
