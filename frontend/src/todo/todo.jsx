import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../componentes/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)        
            this.state = { description: '', list: [] }

            this.handleAdd = this.handleAdd.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=createdAt`).then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description}).then(resp => this.refresh())
    }
    
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description = {this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList list={this.state.list}/>
            </div>
        )
    }
}