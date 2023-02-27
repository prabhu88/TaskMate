import React from 'react'
import {Route,Switch} from 'react-router-dom'
import routes from '../router/router'
import TopNav from '../components/headers/topnav'
import NavBar from '../components/navbars/navbar1'
const DefaultLayout = () => {
    const getroutes = (paths) => {
        return paths.map((prop,key) => {
            if (prop.layout === "/todo"){
                return(
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                )
            }
            else{
                return null;
            }
        })
    }
    return(
        <div className="container">
            <div className="container">      
                <TopNav/>        
                <NavBar />                  
            </div>
            <main class="container">
                <Switch>
                    {getroutes(routes)}
                </Switch>
            </main>
        </div>
    )
}
export default DefaultLayout