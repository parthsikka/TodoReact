import React, { Component } from 'react';
import InputBox from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";

class App extends Component {
  state = {
    todos: [
      {id:"1", todo:"Learn JSX!"},
      {id:"2", todo:"Learn JavaScript"}, 
      {id:"3", todo:"Learn Nginx"} 
    ]
  };
  deleteTodo = (id) =>{
    let updatedTodos = this.state.todos.filter(function(todoObj){
      if(todoObj.id==id){
        return false ; 
      }else{
        return true ;
      }
    })
    // update this states todo with the left todos : 
    this.setState({
      todos:updatedTodos
    })
  }
  addTodo = (todo)=>{
    let updatedTodos = [
      ...this.state.todos, {id:this.state.todos.length+1, todo:todo},
    ]; 
    this.setState({
      todos : updatedTodos
    })
  }
  render() {
    let todos = this.state.todos ;
    let deleteTodo = this.deleteTodo ;
    return (
      <div className="App">
        <InputBox addTodo={this.addTodo}></InputBox>
        <TodosList todos={todos} deleteTodo={deleteTodo}></TodosList>
      </div>
    );
  }
}

export default App;