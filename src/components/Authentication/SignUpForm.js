import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../state/auth'

import { Form, Button, Header } from 'semantic-ui-react'

class SignUpForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props
            .signUp(this.state.email, this.state.password)
            .catch(error => this.setState({error}))
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    renderInput(fieldName, type = 'text') {
        return (
            <input
                name={fieldName}
                value={this.state[fieldName]}
                type={type}
                onChange={this.handleChange}
            />
        )
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Header textAlign='center'>Zarejestruj się:</Header>
                <Form.Field>
                    <label>E-mail</label>
                    {this.renderInput('email')}</Form.Field>
                <Form.Field>
                    <label>Hasło</label>
                    {this.renderInput('password', 'password')}</Form.Field>
                <Button>Zarejestruj się</Button>
            </Form>
        )
    }
}

export default connect(null, {signUp})(SignUpForm)