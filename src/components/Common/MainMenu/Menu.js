import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom'

import UsersView from '../../Views/PersonsView'
import SearchView from '../../Views/SearchView'
import WishesView from '../../Views/WishesView'

import {Menu, Icon, Segment, Sidebar} from 'semantic-ui-react'



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
                            <Link to="/">Wyszukiwarka życzeń</Link>
                        </Menu.Item>
                        <Menu.Item name='add-wish'>
                            Dodaj życzenie
                        </Menu.Item>
                        <Menu.Item name='user-list'>
                            <Link to="/users">Lista osób</Link>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Route exact path="/" component={SearchView}/>
                            <Route path="/users" component={UsersView} />
                            <Route path="/wishes" component={WishesView} />



                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
               </React.Fragment>
        )


    }
}
export default MenuBar
