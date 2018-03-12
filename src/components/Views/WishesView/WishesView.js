import React, {Component} from 'react'
import '../../../style/WishesView.css'
import { Table, Icon } from 'semantic-ui-react'

class WishesView extends Component {
    render() {
        const { category, wish, id } = this.props;
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
                        <Table.Row key={ id }>
                            <Table.Cell>{ category }</Table.Cell>
                            <Table.Cell>{ wish }</Table.Cell>
                            <Table.Cell><Icon disabled name='star'/></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </React.Fragment>
        )
    }
}

export default WishesView