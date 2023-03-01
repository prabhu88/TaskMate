import React from 'react'
import {Route,Switch} from 'react-router-dom'
import routes from '../router/router'
import TopNav from '../components/headers/topnav'
import NavBar from '../components/navbars/navbar1'
// import CardWithThubnail from '../components/cards/cardThumbnail'
// import CardFuturePosts from '../components/cards/cardFuturePosts'
import StickyBar from '../components/navbars/stickyBar'
import Footer from '../components/footer/footer'
import SearchTodos from '../views/searchTodos'
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
        <>
        <div className="container">
            <div className="container">      
                <TopNav/>        
                <NavBar />                  
            </div>
            <main className="container">
                {/* <CardFuturePosts /> */}
                {/* <CardWithThubnail posts={postsData} /> */}
                <div className="row g-5">
                    <div className="col-md-8">
                        <Switch>
                            {getroutes(routes)}
                            <Route
                                path="/todo/search/:id"
                                render={(props) => <SearchTodos {...props} />}                                
                            />
                        </Switch>
                    </div>
                    <div className="col-md-4">
                        <StickyBar />
                    </div>
                </div>                
            </main>            
        </div>
        <Footer />
        </>
    )
}
export default DefaultLayout