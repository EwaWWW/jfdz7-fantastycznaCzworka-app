import React, {Component} from 'react'
import wishes from '../Data/wishes';

export default () => {
    const wishesIds = Object.keys(wishes);
      return <React.Fragment>
          <table>
            <thead>
                <tr>
                    <td><b>Category</b></td>
                    <td><b>Wish</b></td>
                </tr>
            </thead>
            <tbody>
                {wishesIds.map(id =>
                    <tr key={id}>
                        <td>{ wishes[id].category }</td>
                        <td>{ wishes[id].wish }</td>
                    </tr>
                )}
            </tbody>
          </table>
      </React.Fragment>
  }