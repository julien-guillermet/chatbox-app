import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Connexion from './Components/Connexion'
import App from './App'
import NotFound from './Components/NotFound'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion}></Route>
            <Route path='/pseudo/:pseudo' component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
