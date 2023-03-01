import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import CardTaskAction from '../components/cards/cardTaskAction'
const ImportantTask = () => {
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
    return (
        <>
            {
                todos ? <CardTaskAction todos={todos} option="important" callback={courtacy} /> : null
            }            
        </>
    )
}

export default ImportantTask