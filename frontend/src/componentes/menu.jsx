import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIgloo,faHome, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

library.add(faIgloo,faHome,faCalendar )

export default props => (
<nav className='navbar navbar-inverse'>
    <div className='container'>
        <div className='navbar-header'>
            <Link className='navbar-brand' to='/todos'>
                <FontAwesomeIcon icon="calendar" /> TodoApp
            </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/todos">Tarefas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </div>       
    </div>
</nav>
)