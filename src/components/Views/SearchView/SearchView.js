import React, { Component } from 'react'
import { Table, Grid } from 'semantic-ui-react'

import SearchFilter from "./SearchFilter"
import TableRowWish from "../../Views/WishesView/TableRowWish"
import wishes from "../../../Data/wishes"
import AddWish from '../WishesView/AddWish'

class SearchView extends Component {

    state = {
        allWishes: wishes,
        category: ''
    };


    updateCategory = (category) => {
        this.setState({
            category: category
        },() => {console.log(this.state)}
        )
    }

render() {

    const wishes = this.state.category ? this.state.allWishes.filter(wish => wish.category === this.state.category)
         :
        this.state.allWishes.filter(wish => wish.category !== this.state.category);
        return (
            <React.Fragment>
                <Grid centered padded>
                      <SearchFilter
                             filterToggle={this.updateCategory}/>
                </Grid>
                <Table celled class="ui inverted grey table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell><b>Kategoria</b></Table.HeaderCell>
                            <Table.HeaderCell><b>Życzenie</b></Table.HeaderCell>
                            <Table.HeaderCell><b>Dodaj do ulubionych</b></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {wishes.map(wish =>
                    <TableRowWish
                        id={wish.id}
                        wish={wish.wish}
                        category={wish.category}/>
                )}
                    </Table.Body>
                </Table>
                <AddWish/>
            </React.Fragment>
        )
    }
}

export default SearchView