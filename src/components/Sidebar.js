import React, { Component } from 'react'
import { Menu, Icon, Segment, Header} from 'semantic-ui-react'

class SidebarComp extends Component {

    render() {
        return (

            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical
                         inverted>
                    <Menu.Item name='home'>
                        <Icon name='home'/>
                        Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad'/>
                        Games
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera'/>
                        Channels
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestiae mollitia
                            numquam sapiente velit! Ab asperiores delectus dignissimos distinctio eius ipsa ipsam odio
                            quae quo, rerum, sit sunt suscipit veritatis.</p>
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
        )
    }
}
export default SidebarComp