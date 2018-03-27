import React, {Component} from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AddPerson from '../../Views/PersonsView/AddPerson'





class PersonsList extends Component {

    render() {

        const { persons} = this.props
        console.log(persons);
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
                        {persons.map(person =>

                            <Table.Row key={person.id}>
                                <Table.Cell>{person.name}</Table.Cell>

                                <Table.Cell>{person.wish && person.wish[0].wish }</Table.Cell>
                                <Table.Cell>{person.email}</Table.Cell>
                                <Table.Cell>{person.date}</Table.Cell>
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

export default connect(
    state => ({
        persons: state.persons.data

    })
) (PersonsList)