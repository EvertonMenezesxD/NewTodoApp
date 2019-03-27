import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/custom.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../componentes/menu'


export default class App extends Component {
    render(){
        return (
        <div className='container'>            
            <BrowserRouter>
                <Menu/>
            <Switch >
                <Route path='/todos' component={Todo} />
                <Route path='/about' component={About} />
                <Route path='*' component={Todo} />
            </Switch>
            </BrowserRouter>
        </div>
    );
    }
}