import React,{Suspense} from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import DefaultLayout from './layout/default'
const loading = (
    <div className="spinner-root pt-3 text-center">
      <div className="sp-spinner sp-spinner-pulse">loading</div>
    </div>
)
const Todo = () => {
    return(
        <HashRouter> 
            <Suspense fallback={loading}>    
                <Switch>
                    <Route path="/todo" render={(props) => <DefaultLayout {...props} />} />
                    <Redirect from="/" to="todo/home" />
                </Switch>                       
            </Suspense>
        </HashRouter>
    )
}
export default Todo