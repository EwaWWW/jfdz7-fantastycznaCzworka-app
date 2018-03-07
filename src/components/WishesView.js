import React, {Component} from 'react'
import wishes from '../Data/wishes';
import '../style/WishesView.css'

export default () => {
    const wishesIds = Object.keys(wishes);
      return <React.Fragment>
          <table>
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
                        <td className="alignc">{ wishes[id].category }</td>
                        <td className="alignc">{ wishes[id].wish }</td>
                        <td className="alignc"><i className="material-icons">star_border</i></td>
                    </tr>
                )}
            </tbody>
          </table>
      </React.Fragment>
  }