import React, { Component } from 'react';

class InputBox extends Component {
    state = {  
        todoValue : "",
    }; 

    handleOnChange = (e) =>{
        let value = e.target.value ; 
        this.setState({
            todoValue : value 
        })
    } ;
    handleAddTodo = (e) =>{
        let todo = this.state.todoValue ;
        this.props.addTodo(todo) 
        this.setState({
            todoValue:"",
        })
    };
    render() { 
        let handleOnChange = this.handleOnChange ;
        let handleAddTodo = this.handleAddTodo ;
        let todoValue = this.state.todoValue ;
        return ( 
            <div className="inputBox d-flex m-4">
               <input type="text" class="form-control" onChange={handleOnChange} value={todoValue}></input>
                <button className="btn btn-success" onClick={handleAddTodo}>Append!</button>
            </div>
        );
    }
}
 
export default InputBox;