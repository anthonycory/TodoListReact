import React, { Component } from 'react'
import { MdDeleteSweep } from 'react-icons/md';

class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            items: []
        };
    }
    onChange(event) {
        this.setState ({
            value: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState ({
            items: [...this.state.items, this.state.value]
        });
        this.setState({
            value: ""
        })
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item)
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label for="formGroupExampleInput" style={{color: "white", fontSize: 40}}>Todo</label><br></br>
                            <div style={{display: "flex"}}>
                                <input type="text" class="form-control" placeholder="Todo" value={this.state.value} onChange={this.onChange.bind(this)} />
                                <button type="button" class="btn btn-success" onClick={this.addTodo.bind(this)} style={{marginLeft: 10}}>Ajouter</button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <br></br>
                    {this.state.items.map((todo) => {
                        return (
                            <div class="alert alert-success"  key={todo}>
                                <li>{todo}</li>
                                <button style={{border: "none", borderRadius: "5px"}} onClick={this.deleteTodo.bind(this, todo)}><MdDeleteSweep size={35} color="#ce5757" /></button>
                            </div>
                        )
                    })} 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Todolist;