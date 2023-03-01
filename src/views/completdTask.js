import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CardTaskAction from '../components/cards/cardTaskAction'
const CompletedTask = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.todoReducer)    
    const [todos,setTodos] = useState(data.todos ? data.todos: {})
    useEffect(() => {
        setTodos(
            data.todos.filter(e => e.status == "completed")
        )
    }, [data])
    console.log(todos)
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
            {
                todos.length > 0  ? <CardTaskAction todos={todos} option="important" callback={courtacy} /> : (
                    <div className="alert info">
                        No completed tasks
                    </div>
                )
            }
            {
                todos.length > 0   ? <CardTaskAction todos={todos} option="normal" callback={courtacy} /> : null
            }
        </>
    )
}

export default CompletedTask