import React, { Component } from 'react'
import { Table, Grid, Button} from 'semantic-ui-react'
import {Search}from 'semantic-ui-react'


import SearchFilter from "./SearchFilter"
import TableRowWish from "../../Views/WishesView/TableRowWish"
import wishes from "../../../Data/wishes"
import AddWish from '../WishesView/AddWish'

class SearchView extends Component {

    state = {
        allWishes: wishes,
        category: '',
        searchValue: ''
    };


    updateCategory = (category) => {
        this.setState({
            category: category
        },() => {console.log(this.state)}
        )
    };

    handleSearch = (e) => {
        this.setState({
            searchValue: (e).target.value
        })
    };


render() {

    const wishes = this.state.category ? this.state.allWishes.filter(wish =>
        wish.category === this.state.category)
         :
        this.state.allWishes;

        return (
            <React.Fragment>
                <Search onChange={this.handleSearch} onselectionchange={this.state.allWishes.filter(
                    wish => ( this.state.searchValue === '' ? true : [
                            wish.wish,
                            wishes.category
                        ].map(
                            wish => wish.toLowerCase()
                        ).some(
                            searchValue => searchValue.includes(this.state.searchValue.toLowerCase()
                            ))
                    )
                )}>Wyszukaj życzenie</Search>
                <Grid centered padded>
                      <SearchFilter
                             filterToggle={this.updateCategory}/>
                </Grid>
                <Table celled class="ui inverted grey table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell><b>Kategoria</b></Table.HeaderCell>
                            <Table.HeaderCell width={10}><b>Życzenie</b></Table.HeaderCell>
                            <Table.HeaderCell width={1}><b>Dodaj do ulubionych</b></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{
                                wishes.map(wish =>
                            <TableRowWish
                                id={wish.id}
                                wish={wish.wish}
                                category={wish.category}/>
                        )}
                        /*{
     // //  this.state.allWishes.filter(
    // //           wish => (
    // //         this.state.searchValue === '' ? true : [
    // //             wish.wish,
    // //             wishes.category
    // //         ].map(
    // //             wish => wish.toLowerCase()
    // //         ).some(
    // //             searchValue => searchValue.includes(this.state.searchValue.toLowerCase()
    // //             ))
    // //     )
    // // )
                    }*/
                        </Table.Body>
                </Table>
                <Button color='red' onClick={() =>
                    this.refs.addWish.openModal()
                    }>Dodaj życzenie</Button>
                <AddWish ref="addWish"/>
            </React.Fragment>
        )
    }
}

export default SearchView