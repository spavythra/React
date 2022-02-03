import React, {useState} from 'react';
import {connect} from "react-redux";
import Todos from "./Todos";
import ActionBar from "./Navigation/ActionBar";
import AddBox from "./AddBox";
import {filterBoxSelector} from "../store/TodoStore/TodoSelectors";
import {filterBoxAction} from "../store/TodoStore/TodoActions";

const ViewTask = (props) => {
    const {todos, updateTodoAction,setAppFilters, filter, setFilter,index, deleteTodoAction, remaining, updateTasksAction, updateBoxPositionAction} = props;
    const [currentBox, setCurrentBox] = useState(null)
    const [Categoryfilter, setCategoryfilter] = useState(false)
    const [order,setOrder] = useState('asc')

    const renderList = () => {
        let total_length = todos.length;
        let count = 0;
        
        if(todos.length == 0){
            return(
            <div className="todo-container">
                <p style={{marginLeft:'30px',fontSize:'20px'}}> No pending tasks!</p>
            </div>)
        }

        return todos.map((todo, index) => {
            
            if(todo.tasks.length == 0){
                count++;
                if(count == total_length){
                    return(
                    <div className="todo-container">
                        <p style={{marginLeft:'30px',fontSize:'20px'}}> No pending tasks!</p>
                    </div>)
                }
            }
            return(
        
                todo.tasks.map((task,id)=>{
                    console.log(task.completed)
                   
                        if(task.completed === false){
                            return(
                                <div className="todo-container">
                                <ul className="todo-list">
                                    <div className="todo" key={id}>
                                            <li className='todo-item'>{task.name}</li>
                                    </div>
                                </ul>
                            </div>
                            )    
                        }
                    }               
                )
            )
        })
    }
        

    return (<>
        <div className="content_wrapper">
           {renderList()} 
        </div>
    </>);
}

export default connect(
    (state) => ({
        todos: todosSelector(state),
    }),
    (dispatch) => ({


    })
)(ViewTask)
