import React, {Component} from 'react'
import '../../../style/WishesView.css'
import { Table, Icon } from 'semantic-ui-react'

class TableRowWish extends Component {
    render() {
        const { category, wish, id } = this.props;
        return (
            <React.Fragment>
                        <Table.Row key={ id }>
                            <Table.Cell>{ category }</Table.Cell>
                            <Table.Cell>{ wish }</Table.Cell>
                            <Table.Cell><Icon disabled name='star'/></Table.Cell>
                        </Table.Row>
            </React.Fragment>
        )
    }
}

export default TableRowWish