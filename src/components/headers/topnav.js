import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './topnav.css'
const TopNav = () => {
    const [searchText,setSearchText] = useState('')
    return(
        <header className="sticky-top blog-header lh-1 py-3 ">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="link-secondary" href="#">Buy me a coffee</a>
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="#">Task Mate</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center masterDiv">
                    <input type="text" className="inputSearch" onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} placeholder="Enter text to search todo's" />
                    <a className="link-secondary Search-Icon" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                    </a>
                    {/* <a className="btn btn-sm btn-outline-secondary" href="#">Search</a> */}
                    <NavLink to={'/todo/search/'+searchText}
                        className="btn btn-sm btn-outline-secondary"
                    >Search
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default TopNav