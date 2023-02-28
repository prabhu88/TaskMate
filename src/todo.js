import React,{Suspense,useState} from 'react'
import {HashRouter,Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from './themes/global'
import DefaultLayout from './layout/default'
import {useTheme} from './themes/useTheme'
const loading = (
    <div className="spinner-root pt-3 text-center">
      <div className="sp-spinner sp-spinner-pulse">loading</div>
    </div>
)
const Container = styled.div`
  margin: 5px auto 5px auto;
`;
const Todo = () => {
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
    return(
        <ThemeProvider theme={selectedTheme}>
            {/* <GlobalStyle /> */}
            <HashRouter > 
                <Suspense fallback={loading}>  
                    <Container style={{fontFamily: selectedTheme.font}} >
                        <BrowserRouter>
                            <Switch >
                                <Route path="/todo" render={(props) => <DefaultLayout {...props} />} />
                                <Redirect from="/" exact to="/todo/home" />
                            </Switch>    
                        </BrowserRouter>
                    </Container>                   
                </Suspense>
            </HashRouter>
        </ThemeProvider>
    )
}
export default Todo