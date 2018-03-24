import React, { Component } from 'react'
import { Table, Grid, Button} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'


import SearchFilter from "./SearchFilter"
import TableRowWish from "../../Views/WishesView/TableRowWish"
import wishes from "../../../Data/wishes"
import AddWish from '../WishesView/AddWish'
import "../../../style/SearchView.css"

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

    const wishes = this.state.allWishes.filter(
        wish => this.state.category ? wish.category === this.state.category : true
    ).filter(
        ({ wish }) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase())
    );
        return (
            <React.Fragment>
            <Input className="search-input" onChange={this.handleSearch} type="text" placeholder="Wyszukaj życzenie" icon='search'/>
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
                        </Table.Body>
                        </Table>
                        <Button color='red' onClick={() =>
                        this.refs.addWish.openModal()}>Dodaj życzenie</Button>
                        <AddWish ref="addWish"/>
                        </React.Fragment>
                        )
            }
}

export default SearchView