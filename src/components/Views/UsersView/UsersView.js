import React, {Component} from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

import users from '../../../Data/users'
import wishes from '../../../Data/wishes'

class UsersView extends Component {



render() {
    return (

<React.Fragment>
    <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Nazwa użytkownika</Table.HeaderCell>
            <Table.HeaderCell>Życzenia</Table.HeaderCell>
            <Table.HeaderCell>Adres email</Table.HeaderCell>
            <Table.HeaderCell>Data urodzin</Table.HeaderCell>
            <Table.HeaderCell><Checkbox label="Wyślij automatycznie"/></Table.HeaderCell>
        </Table.Row>
    </Table.Header>

        <Table.Body>
            {users.map(user =>

                <Table.Row key={user.id}>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>dfdf</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.date}</Table.Cell>
                        <Table.Cell collapsing>
                            <Checkbox label="Wyślij automatycznie"/>
                        </Table.Cell>
                    </Table.Row>

            )}

        </Table.Body>

        <Table.Footer fullWidth>
            <Table.Row>

                <Table.HeaderCell colSpan='5'>
                    <Button floated='right' icon labelPosition='left' primary size='small'>
                        <Icon name='user' /> Dodaj użytkownika
                    </Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
</React.Fragment>

    )

}
}

export default UsersView