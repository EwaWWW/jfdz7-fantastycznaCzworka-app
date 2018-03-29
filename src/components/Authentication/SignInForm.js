import React, {Component} from 'react'
import { Form, Button, Header, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {signIn, translations} from '../../state/auth'

class SignInForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props
            .signIn(this.state.email, this.state.password)
            .catch(error => this.setState({ error }))
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
                {this.state.error &&
                <Label size='large' basic color='red'>
                    {translations(this.state.error.code)}
                </Label>}
                <Form.Field required>
                    <label>E-mail</label>
                    {this.renderInput('email')}</Form.Field>
                <Form.Field required>
                    <label>Hasło:</label>
                    {this.renderInput('password', 'password')}</Form.Field>
                <Button fluid>Zaloguj</Button>
            </Form>
        )
    }
}

export default connect(null, {signIn})(SignInForm)