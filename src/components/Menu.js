import React, { Component } from 'react'
import { Menu, Icon, Sidebar, Segment, Header} from 'semantic-ui-react'

class MenuBar extends Component {
    state = { visible: false };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
        const { visible } = this.state;

        return (
            <React.Fragment>
            <Menu icon='labeled'>
                <Menu.Item onClick={this.toggleVisibility}>
                    <Icon name='list layout'/>
                </Menu.Item>

                <Menu.Item position='right'>
                    <Icon name='user'/>
                    Zaloguj się
                </Menu.Item>
            </Menu>
            <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item name='home'>
            <Icon name='home' />
            Home
            </Menu.Item>
        <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            Games
        </Menu.Item>
        <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
            </Menu.Item>
    </Sidebar>
        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>Application Content</Header>
            </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
            </React.Fragment>
        )


    }
}
export default MenuBar
