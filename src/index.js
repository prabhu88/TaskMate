import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Todo from './todo'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import './assets/css/global.css'
// import {GlobalStyle}  from './themes/global'
import * as themes from './themes/schema.json'
import {setToLS} from './themes/utility'
const root = document.getElementById('todoRoot')
const StartFunction = () =>{
    setToLS('all-themes',themes.default)
    return(
        <React.StrictMode>
            <Provider store={store}>     
                <BrowserRouter>                    
                    <Todo />
                </BrowserRouter>                
            </Provider>       
        </React.StrictMode>
    )
}
ReactDOM.render(
    <StartFunction />
    ,root
)