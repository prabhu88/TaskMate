import {ADDTODO,UPDATETODO} from '../actionType'
//localStorage.removeItem('todos')
let todoData = JSON.parse(localStorage.getItem('todos'))

const initialState = todoData ? todoData : {
    todos : [
        {
            id: 1,
            title : 'bills due date',
            date : '23 Feb 26',
            desc : 'Pay the utility bills before the due date',
            dueDate : '15 Mar 23',
            status : 'pending',
            completed : true,
            label : 'important'
        },
        {
            id : 2,
            title : 'Complete Project1',
            date : 'Feb 27',
            desc : 'Complete GitHub Project',
            dueDate : '15 Mar 23',
            status : 'pending',
            completed : false,
            label : 'important'
        }
    ]
}
const todoReducer = (state = initialState, action) => {
    const {type,payload} = action
    switch (type){
        case ADDTODO :
            const newTodo = {                
                id : state.todos.length + 1,
                ...payload,
            }
            localStorage.setItem('todos',JSON.stringify({
                todos: [...state.todos, newTodo]
            }))            
            return {
                todos: [...state.todos, newTodo]
            };
            
        case UPDATETODO :            
            localStorage.setItem('todos',JSON.stringify({
                todos: payload
            })) 
            
            return {
                todos: payload
            };
        default :                        
            return state
    }
}
export default todoReducer