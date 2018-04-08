import React, {Component} from 'react'
import {connect} from 'react-redux'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import { Container, Tab } from 'semantic-ui-react'

class Auth extends Component {
    render() {

        const panes = [
            { menuItem: 'Zaloguj', render: () => <Tab.Pane><SignInForm/></Tab.Pane> },
            { menuItem: 'Zarejestruj', render: () => <Tab.Pane><SignUpForm/></Tab.Pane> }
        ]

        return this.props.user === null ? (
        <Container className='auth'>
            <Tab panes={panes}  />
        </Container>
        ) : (
            this.props.children
        )
    }
}

export default connect(state => ({
    user: state.auth.user
}))(Auth)