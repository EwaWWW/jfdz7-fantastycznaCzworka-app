import React, {Component} from 'react'
import wishes from '../../../Data/wishes';
import '../../../style/WishesView.css'
import { Table, Icon } from 'semantic-ui-react'

class WishesView extends Component {
    render() {
        const wishesIds = Object.keys(wishes);
        return (
            <React.Fragment>
                <Table celled class="ui inverted grey table">
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell><b>Kategoria</b></Table.HeaderCell>
                        <Table.HeaderCell><b>Życzenie</b></Table.HeaderCell>
                        <Table.HeaderCell><b>Dodaj do ulubionych</b></Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {wishesIds.map(id =>
                        <Table.Row key={id}>
                            <Table.Cell>{ wishes[id].category }</Table.Cell>
                            <Table.Cell>{ wishes[id].wish }</Table.Cell>
                            <Table.Cell><Icon disabled name='star'/></Table.Cell>
                        </Table.Row>
                    )}
                    </Table.Body>
                </Table>
            </React.Fragment>
        )
    }
}

export default WishesView