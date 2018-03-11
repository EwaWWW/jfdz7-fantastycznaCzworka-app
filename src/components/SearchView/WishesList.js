import React, {Component} from 'react';
import '../../style/WishesView.css';
import {Table} from 'semantic-ui-react';


class WishesView extends Component {
    render() {
        const { category, wish, id } = this.props;
        return (
            <Table class="ui inverted grey table">
                <thead>
                <tr>
                    <th><b>Kategoria</b></th>
                    <th><b>Życzenie</b></th>
                    <th><b>Dodaj do ulubionych</b></th>
                </tr>
                </thead>
                <tbody>
                <tr key={id}>
                    <td>{category}</td>
                    <td>{wish}</td>
                    <td><i className="material-icons">star_border</i></td>
                </tr>
                </tbody>
            </Table>
        )
    }
}


export default WishesView;