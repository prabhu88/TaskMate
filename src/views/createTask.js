import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
const CreateTask = () => {
    const dispatch = useDispatch();
    //new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    const [fromData,setFormData] = useState({        
        title : '',
        date : '',
        desc : '',
        dueDate : '',
        status : 'pending',
        completed : false,
        label : 'normal'
    })
    
    const addTodo = (e) => {
        e.preventDefault()
        let result = fromData;        
        let createdDate = new Date(result.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        let dueDate = new Date(result.dueDate).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        result = {...result,
            date : createdDate,
            dueDate : dueDate
        }
        dispatch({
            type : "ADDTODO",
            payload : result
        })
        setFormData({        
            title : '',
            date : '',
            desc : '',
            dueDate : '',
            status : 'pending',
            completed : false,
            label : 'normal'
        })
    }
    return(
        <div className="card p-4">
            <div className="card-head">
                <h4>Add todo</h4>
            </div>
            <div className="card-body">
                <form onSubmit={addTodo}>
                    <div className="from-group mt-2 p-2">                
                        <label className="lbl form-label" for="title">Enter Title For Task</label>
                        <input type="text" id="title" className="form-control" value={fromData.title} placeholder="Enter Title" 
                            onChange={(e)=>{e.preventDefault();setFormData({...fromData,title : e.target.value})}} required
                        />
                    </div>
                    <div className="from-group mt-2 p-2">                
                        <label className="lbl form-label" for="title">Enter Title For Task</label>
                        <textarea type="text" id="title" className="form-control" value={fromData.desc} placeholder="Enter Title" 
                            onChange={(e)=>{e.preventDefault();setFormData({...fromData,desc : e.target.value})}} 
                        />
                        
                    </div>
                    <div className="from-group mt-2 p-2">                
                        <label className="lbl form-label" for="title">Enter Date </label>
                        <input type="date" id="dueDate" className="form-control" value={fromData.date} placeholder="Enter Title" 
                            onChange={(e)=>{e.preventDefault();setFormData({...fromData,date : e.target.value})}} required
                        />
                    </div>
                    <div className="from-group mt-2 p-2">                
                        <label className="lbl form-label" for="title">Enter Due Date</label>
                        <input type="date" id="dueDate" className="form-control" value={fromData.dueDate} placeholder="Enter Title" 
                            onChange={(e)=>{e.preventDefault();setFormData({...fromData,dueDate : e.target.value})}} required
                        />
                    </div>
                    <div className="d-flex pt-1">
                        <button className="btn btn-info m-auto" type="submit">Add</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default CreateTask