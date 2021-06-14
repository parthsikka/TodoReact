import React, { Component } from 'react';
class TodosList extends Component {
    state = { 
        
     }
    render() {
        let todos = this.props.todos ; 
        let deleteTodo = this.props.deleteTodo ;
        
       return (
           <div className="todo-container">
               {todos.map(function(todoObj){
                   return(
                   <div key={todoObj.id} className="todos mb-3 d-flex ">
                       <div className="form-control">{todoObj.todo}</div>
                       <button className="btn btn-danger dflex" onClick={(e) => {deleteTodo(todoObj.id)}}> Delete</button>
                   </div>
                   )
               })}
           </div>
       )  ;
    }
}
 
export default TodosList;