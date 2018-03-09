import React, { Component } from 'react'
import {Menu, Icon, Segment, Sidebar, Header} from 'semantic-ui-react'
import SearchView from "./SearchView/SearchView";


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
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible}  icon='labeled' vertical>
                        <Menu.Item name='profil'>
                            Profil użytkownika
                        </Menu.Item>
                        <Menu.Item name='search'>
                            Wyszukiwarka życzeń
                        </Menu.Item>
                        <Menu.Item name='add-wish'>
                            Dodaj życzenie
                        </Menu.Item>
                        <Menu.Item name='user-list'>
                            Lista osób
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                           <SearchView/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </React.Fragment>
        )


    }
}
export default MenuBar
