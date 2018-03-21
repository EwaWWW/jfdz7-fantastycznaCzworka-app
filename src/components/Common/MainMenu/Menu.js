import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom'

import UsersView from '../../Views/UsersView'
import SearchView from '../../Views/SearchView'
import TableRowWish from '../../Views/WishesView/TableRowWish'
import AddWish from '../../Views/WishesView/AddWish'
import {Menu, Icon, Segment, Sidebar} from 'semantic-ui-react'
import Auth from '../../Authentication/Auth'
import SignOutButton from '../../Authentication/SignOutButton'



class MenuBar extends Component {
    state = {
        visible: false,
        modalAddWishVisible: false
    };

    modalAddWishVisibility = () => this.setState({ modalAddWishVisible: !this.state.modalAddWishVisible });

    openAddWish = () => {
    console.log("OpenAddWish")
        return(
            <AddWish visibility={true} />
        )
    }

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
                    <SignOutButton/>
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
                            <Link onClick={() =>
                                this.refs.addWish.openModal()
                            } to="/">Dodaj życzenie</Link>
                        </Menu.Item>
                        <Menu.Item name='user-list'>
                            <Link to="/users">Lista osób</Link>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                         <Auth>
                            <Route exact path="/" component={SearchView}/>
                            <Route path="/users" component={UsersView} />
                            <Route path="/wishes" component={TableRowWish} />
                         </Auth>


                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                   <AddWish ref="addWish"/>
               </React.Fragment>
        )
    }
}
export default MenuBar
