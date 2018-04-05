
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Icon } from 'semantic-ui-react'

import { signOut } from '../../state/auth'

    class SignOutButton extends Component {
      render() {
                return (

                    <Button  onClick={() => this.props.signOut()}
                             floated='right' icon labelPosition='left'
                             primary size='small'>
                        <Icon name='user' /></Button>
                )}
    }

export default connect(null, { signOut })(SignOutButton)