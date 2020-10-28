import React, { Component } from 'react'

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
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item)
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodo() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <h1>Ma todo List</h1>
                <form>
                    <input type="text" placeholder="name" value={this.state.value} onChange={this.onChange.bind(this)} />
                    <button onClick={this.addTodo.bind(this)}>
                        Ajouter
                    </button>
                </form>
                <div>
                    {this.renderTodo()} 
                </div>
            </div>
        );
    }
}

export default Todolist;