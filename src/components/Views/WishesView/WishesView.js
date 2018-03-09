import React from 'react'
import wishes from '../../../Data/wishes';
import '../../../style/WishesView.css'
import { Table } from 'semantic-ui-react'


export default () => {

    const wishesIds = Object.keys(wishes);
      return <React.Fragment>
          <Table class="ui inverted grey table">
            <thead>
                <tr>
                    <th><b>Kategoria</b></th>
                    <th><b>Życzenie</b></th>
                    <th><b>Dodaj do ulubionych</b></th>
                </tr>
            </thead>
            <tbody>
                {wishesIds.map(id =>
                    <tr key={id}>
                        <td>{ wishes[id].category }</td>
                        <td>{ wishes[id].wish }</td>
                        <td><i className="material-icons">star_border</i></td>
                    </tr>
                )}
            </tbody>
          </Table>
      </React.Fragment>
  }