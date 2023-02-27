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

const root = document.getElementById('todoRoot')
ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>     
                <BrowserRouter>
                    <Todo />
                </BrowserRouter>                
            </Provider>       
        </React.StrictMode> 
    ,root
)