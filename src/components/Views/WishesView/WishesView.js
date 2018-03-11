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
                            <Table.Cell><Icon disabled name='star' /></Table.Cell>
                        </Table.Row>
                    )}
                    </Table.Body>
                </Table>
            </React.Fragment>
        )
    }
}

export default WishesView

//
// export default () => {
//
//     const wishesIds = Object.keys(wishes);
//       return <React.Fragment>
//           <Table class="ui inverted grey table">
//             <thead>
//                 <tr>
//                     <th><b>Kategoria</b></th>
//                     <th><b>Życzenie</b></th>
//                     <th><b>Dodaj do ulubionych</b></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {wishesIds.map(id =>
//                     <tr key={id}>
//                         <td>{ wishes[id].category }</td>
//                         <td>{ wishes[id].wish }</td>
//                         <td><i className="material-icons">star_border</i></td>
//                     </tr>
//                 )}
//             </tbody>
//           </Table>
//       </React.Fragment>
//   }