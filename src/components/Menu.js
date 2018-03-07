import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'

class MenuBar extends Component {
    render() {
        return (
            <Menu icon='labeled'>
                <Menu.Item>
                    <Icon name='list layout'/>
                </Menu.Item>

                <Menu.Item position='right'>
                    <Icon name='user'/>
                    Zaloguj się
                </Menu.Item>
            </Menu>
        )
    }
}
export default MenuBar
