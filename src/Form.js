import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = event => {
        //scrimba says to avoid potential bugs by using this code rather than the commented out code below
        // this.setState({ [event.target.name]: event.target.value })

        const {name, value} = event.target
        this.setState({
            [name]: value
        })

        
    }

    submitIdea = event => {
        event.preventDefault();

        const newIdea = {
            id: Date.now(),
            ...this.state
        }

        this.props.addIdea(newIdea);
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ title: '', description: '' });
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    value={this.state.title}
                    onChange={event => this.handleChange(event)}
                />

                <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={this.state.description}
                    onChange={event => this.handleChange(event)}
                />

                <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
            </form>
        )
    }
}

export default Form;