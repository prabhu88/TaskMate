import React from 'react'
import {NavLink} from 'react-router-dom'
import router from '../../router/router'
const NavBar1 = () => {
    return(
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                {
                    router.map((prop,key)=>{
                        return(
                            <NavLink to={prop.layout + prop.path} className="p-2 link-secondary" key={key}>{prop.name}</NavLink>
                        )
                    })
                }
            </nav>
        </div>
    )
}
export default NavBar1