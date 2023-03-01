import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import _ from 'lodash'
import CardTaskAction from '../components/cards/cardTaskAction'

const SearchTodos = () => {
    const data = useSelector(state => state.todoReducer)
    const [todos,setTodos] = useState(data.todos ? data.todos: {})
    const dispatch = useDispatch()    
    let { id } = useParams()
    useEffect(() => {
        const list = _.filter(data.todos,(todo) =>{
            return (
                _.includes(todo.title.toLowerCase(),id.toLowerCase()) ||
                _.includes(todo.desc.toLowerCase(),id.toLowerCase()) ||
                _.includes(todo.dueDate.toLowerCase(),id.toLowerCase()) ||
                _.includes(todo.date.toLowerCase(),id.toLowerCase())
            )
        })
        setTodos(list)        
    }, [data,id])
    const completeTask = (task_id) => {
        const result = data.todos.map(todo => {
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
        const result = data.todos.map(todo => {
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
        const result = data.todos.filter(todo => todo.id != task_id)
        //setTodos(result)
        dispatch({
            type : "UPDATETODO",
            payload : result
        })
        setTodos(result) 
    }
    const importantTask = (task_id) => {
        const result = data.todos.map(todo => {
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
        const result = data.todos.map(todo => {
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
            Search Todos {id}
            <br/>
            <CardTaskAction todos={todos} option="important" callback={courtacy}/>
            <CardTaskAction todos={todos} option="normal" callback={courtacy}/>
        </>
    )
}
export default SearchTodos