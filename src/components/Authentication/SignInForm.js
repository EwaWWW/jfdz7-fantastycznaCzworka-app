import React, {Component} from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {signIn} from '../../state/auth'

class SignInForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props
              .signIn(this.state.email, this.state.password)
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
                <Header textAlign='center'>Zaloguj się:</Header>
                <Form.Field>
                    <label>E-mail</label>
                    {this.renderInput('email')}</Form.Field>
                <Form.Field>
                    <label>Hasło:</label>
                    {this.renderInput('password', 'password')}</Form.Field>
                <Button fluid>Zaloguj</Button>
            </Form>
        )
    }
}

export default connect(null, {signIn})(SignInForm)