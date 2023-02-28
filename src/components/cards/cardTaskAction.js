import React from 'react'

const CardTaskAction = ({todos,option,callback}) => {
    const [completeTask,pendingTask,deleteTask,importantTask,normalTask] = callback
    return(
        <div className="row mb-2">
            {
                todos.map((prop,key)=>{
                    if(prop.label == option){
                        return(
                            <div className="col-md-6"  key={key}>
                                <div aria-expanded="true" className="row g-0 border rounded  flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <div className="text-capitalize"><strong className="d-inline-block mb-2 text-success text-uppercase">{prop.label}</strong> ({prop.status})</div>
                                        <h3 className="mb-0">{prop.title ? prop.title : '' }</h3>
                                        <div className="mb-1 text-muted">{prop.date ? prop.date : 'Feb 27' }</div>
                                        <p className="card-text mb-auto">
                                            {prop.desc ? prop.desc : '' }
                                        </p>                                    
                                        
                                    </div>                     
                                    <div className="col-auto d-none d-lg-block m-auto">                                           
                                        <div className="btn-group p-2">
                                            <button type="button" className="btn btn-danger">Action</button>
                                            <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="visually-hidden">Toggle Dropdown</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#" title={prop.id} onClick={(e)=>{e.preventDefault();completeTask(e.target.title)}}>Completed</a></li>
                                                <li><a className="dropdown-item" href="#" title={prop.id} onClick={(e)=>{e.preventDefault();pendingTask(e.target.title)}} >Pending</a></li>
                                                <li><a className="dropdown-item" href="#" title={prop.id} onClick={(e)=>{e.preventDefault();importantTask(e.target.title)}} >Important</a></li>
                                                <li><a className="dropdown-item" href="#" title={prop.id} onClick={(e)=>{e.preventDefault();normalTask(e.target.title)}} >Normal</a></li>
                                                <li><hr className="dropdown-divider"/></li>
                                                <li><a className="dropdown-item" href="#" title={prop.id} onClick={(e)=>{e.preventDefault();deleteTask(e.target.title)}} >Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        )
                    }    
                    else{
                        return false
                    }                
                })
            }
        </div>
    )
}
export default CardTaskAction