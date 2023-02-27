import React from 'react'
import {NavLink} from 'react-router-dom'
import router from '../../router/router'
const NavBar1 = () => {
    return(
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                {
                    router.map((prop,key)=>{
                        return(
                            <NavLink to={prop.path} className="p-2 link-secondary" key={key}>{prop.name}</NavLink>
                        )
                    })
                }
            </nav>
        </div>
    )
}
export default NavBar1