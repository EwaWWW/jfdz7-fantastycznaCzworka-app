import React, {Component} from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

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
            <Table.Row>

                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
                <Table.Cell collapsing>
                    <Checkbox label="Wyślij automatycznie"/>
                </Table.Cell>
            </Table.Row>

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