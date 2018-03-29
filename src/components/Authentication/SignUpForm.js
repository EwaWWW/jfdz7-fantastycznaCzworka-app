import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp, signUpWithFacebook, translations} from '../../state/auth'

import { Form, Button, Header, Icon, Divider, Label } from 'semantic-ui-react'

class SignUpForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = event => {
        event.preventDefault()


        this.props
            .signUp(this.state.email, this.state.password)
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
                <Header textAlign='center'>Zarejestruj się:</Header>
                <Label size='large' basic color='red'>
                    {translations(this.state.error.code) ||
                    'wystapił nieznany błąd'}</Label>
                <Form.Field required>
                    <label>E-mail</label>
                    {this.renderInput('email')}</Form.Field>
                <Form.Field required>
                    <label>Hasło</label>
                    {this.renderInput('password', 'password')}</Form.Field>
                <Button fluid>Zarejestruj się</Button>
                <Divider horizontal section>Lub</Divider>
                <Button fluid color='facebook'
                onClick={signUpWithFacebook()}>
                    <Icon name='facebook' /> Zarejestruj przez Facebook
                </Button>
            </Form>
        )
    }
}

export default connect(null, {signUp})(SignUpForm)