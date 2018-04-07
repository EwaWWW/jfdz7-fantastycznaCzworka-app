
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Icon,Popup } from 'semantic-ui-react'

import { signOut } from '../../state/auth'

    class SignOutButton extends Component {
      render() {
                return (
                    <Popup
                        trigger={ <Button icon labelPosition='left'
                                          onClick={() => this.props.signOut()}>
                            <Icon name='log out' />
                        </Button>} content="Wyloguj się"

                    />
                )}
    }

export default connect(null, { signOut })(SignOutButton)