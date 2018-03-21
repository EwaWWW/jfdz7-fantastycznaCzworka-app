import React, {Component} from 'react'
import {connect} from 'react-redux'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import { Grid } from 'semantic-ui-react'

class Auth extends Component {
    render() {
        return this.props.user === null ? (

            <Grid centered>
                <Grid.Column width={6}>
                    <SignInForm/>
                    <SignUpForm/>
                </Grid.Column>
            </Grid>
        ) : (
            this.props.children
        )
    }
}

export default connect(state => ({
    user: state.auth.user
}))(Auth)