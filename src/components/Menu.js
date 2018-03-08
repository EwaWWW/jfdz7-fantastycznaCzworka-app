import React, { Component } from 'react'
import {Menu, Icon, Segment, Sidebar, Header} from 'semantic-ui-react'
import WishesView from "./WishesView";


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
                            <WishesView/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta doloribus error
                                fugiat,
                                laborum laudantium magnam maxime minima molestias nesciunt, non nulla provident quis tenetur
                                totam
                                unde velit veritatis voluptas?</p><p>Alias corporis culpa dolor dolore ea error odio,
                            voluptate?
                            Debitis dolorem et maxime reprehenderit ut? Aperiam dolor, ex magni molestias praesentium quis
                            tempore
                            vitae? Culpa deserunt maxime necessitatibus omnis quisquam!</p><p>Ducimus, iure pariatur.
                            Accusamus
                            asperiores eligendi id. Aliquid assumenda cum enim, eveniet expedita fugit harum inventore ipsa,
                            iusto
                            labore laudantium nisi numquam pariatur, porro praesentium quam ratione tempore ut
                            veritatis?</p>
                            <p>Atque ea illo ipsum minima neque perferendis placeat, provident quasi tempore vel. Accusamus,
                                animi
                                eius enim eos, id inventore laudantium magni modi neque sint ut, veniam vitae. Cupiditate,
                                doloribus
                                esse.</p><p>Aliquam beatae consequatur consequuntur dicta eum iusto molestiae mollitia omnis
                            quod
                            voluptas. A accusamus at atque earum eos et ex excepturi, fuga illum labore modi, provident rem
                            sint vel
                            voluptate!</p><p>Aliquam, delectus deleniti deserunt, dolores ducimus ea esse exercitationem
                            expedita
                            iste laboriosam maxime mollitia, natus nemo odio placeat possimus similique tenetur ut vel
                            vitae. A
                            distinctio impedit laboriosam vitae. Sint.</p>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </React.Fragment>
        )


    }
}
export default MenuBar
