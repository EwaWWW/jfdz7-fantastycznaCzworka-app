import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'

    class Auth extends Component {
      render() {
          return this.props.user === null ? <SignUpForm /> : this.props.children
                  }
    }

export default connect(state => ({
      user: state.auth.user
}))(Auth)