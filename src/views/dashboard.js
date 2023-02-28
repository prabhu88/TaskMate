import React,{useState} from 'react'
import CardTaskAction from '../components/cards/cardTaskAction'
import {useSelector,useDispatch} from 'react-redux'
const Dashboard = () =>{           
    const data = useSelector(state => state.todoReducer)    
    const [todos,setTodos] = useState(data.todos ? data.todos : {})
    const dispatch = useDispatch()        
    const completeTask = (task_id) => {
        const result = todos.map(todo => {
            if(todo.id == task_id){
                console.log('called')
                return {
                    ...todo,
                    status : 'completed'
                }
            }
            else{
                return todo
            }
        });           
        dispatch({
            type : "UPDATETODO",
            payload : result
        })    
        setTodos(result)                 
    }
    const pendingTask = (task_id) => {
        const result = todos.map(todo => {
            if(todo.id == task_id){
                return {
                    ...todo,
                    status : 'pending'
                }
            }
            else{
                return todo
            }
        })            
        dispatch({
            type : "UPDATETODO",
            payload : result
        })  
        setTodos(result)
    }
    const deleteTask = (task_id) => {
        const result = todos.filter(todo => todo.id != task_id)
        //setTodos(result)
        dispatch({
            type : "UPDATETODO",
            payload : result
        })
        setTodos(result) 
    }
    const importantTask = (task_id) => {
        const result = todos.map(todo => {
            if(todo.id == task_id){
                return {
                    ...todo,
                    label : 'important'
                }
            }
            else{
                return todo
            }
        })            
        dispatch({
            type : "UPDATETODO",
            payload : result
        })   
        setTodos(result)          
    }
    const normalTask = (task_id) => {
        const result = todos.map(todo => {
            if(todo.id == task_id){
                return {
                    ...todo,
                    label : 'normal'
                }
            }
            else{
                return todo
            }
        })            
        dispatch({
            type : "UPDATETODO",
            payload : result
        }) 
        setTodos(result)
    }
    let courtacy = [completeTask,pendingTask,deleteTask,importantTask,normalTask]
    return(
        <>            
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
                From the Dashboard
            </h3>            
            <p className="">
                The Task Mate Todo application dashboard provides a quick and easy overview of the user's tasks and priorities.
            </p>
            
            {/* display important todo's */}
            <h5 className="pt-4 pb-2 mb=2 fst-italic border-bottom">
                Important Tasks
            </h5>            
            {
                todos ? <CardTaskAction todos={todos} option="important" callback={courtacy} /> : null
            }
            
            {/* display important todo's */}

            {/* display important todo's */}
            <h5 className="pt-4 pb-2 mb=2 fst-italic border-bottom">
                Normal Tasks
            </h5>      
            {
                todos ? <CardTaskAction todos={todos} option="normal" callback={courtacy} /> : null
            }                  
            {/* display important todo's */}
        </>
    )
}
export default Dashboard