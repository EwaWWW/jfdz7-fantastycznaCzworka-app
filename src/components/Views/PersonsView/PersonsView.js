import React, {Component} from 'react'
import { Checkbox, Table } from 'semantic-ui-react'

import AddPerson from './AddPerson'

import users from '../../../Data/persons'
import wishes from '../../../Data/wishes'


const usersAndWishes = users.map(user => {
    return {
        id: user.id,
        name: user.name,
        wish: wishes.filter(wish => wish.id === user.idWish),
        date: user.date,
        email: user.email
    }
});


console.log(usersAndWishes);

class PersonsView extends Component {



render() {
    return (

<React.Fragment>
    <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Imię i nazwisko</Table.HeaderCell>
            <Table.HeaderCell>Życzenia</Table.HeaderCell>
            <Table.HeaderCell>Adres email</Table.HeaderCell>
            <Table.HeaderCell>Data urodzin</Table.HeaderCell>
            <Table.HeaderCell><Checkbox label="Wyślij automatycznie"/></Table.HeaderCell>
        </Table.Row>
    </Table.Header>

        <Table.Body>
            {usersAndWishes.map(user =>

                <Table.Row key={user.id}>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.wish[0].wish}</Table.Cell>
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
                    <AddPerson/>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
</React.Fragment>

    )

}
}

export default PersonsView