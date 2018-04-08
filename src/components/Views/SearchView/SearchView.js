import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Grid, Button} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

import SearchFilter from "./SearchFilter"
import TableRowWish from "../../Views/WishesView/TableRowWish"
import AddWish from '../WishesView/AddWish'
import {openCloseModalWish} from "../../../state/modalAddWish"
import '../../../style/WishesView.css';

class SearchView extends Component {

    state = {
        column: null,
        direction: null,
        category: '',
        searchValue: ''
    };

    handleSort = clickedColumn => () => {
        const { column, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                direction: 'ascending',
            });

            return
        }

        this.setState({
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };


    returnAllCategory = (e) => {
        this.setState ({
            category: (e).category
        })
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

    generateRow = (wishes, wish) => {
        console.log("wi", wishes, wish, this.props.wishes);
        let test = wish.favorite!==undefined?wish.favorite:false;

        return (
            <TableRowWish
                id={wish.id}
                wish={wish.wish}
                category={wish.category}
                favorite={test}
            />
        )
    };

    render() {

        const { column, direction } = this.state;

        let wishes = [];
        let userWishes = this.props.wishes.wishes.filter(wish => wish.userId === undefined || wish.userId === this.props.auth.user.uid);

        if (this.state.category === "ulubione") {
            wishes = userWishes.filter(wish => wish.favorite === true)
                .filter(({wish}) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase()))
        }
        else if  (this.state.category) {
            wishes = userWishes.filter(wish => wish.category === this.state.category)
                .filter(({wish}) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase()))
        }
        else {
            wishes = userWishes
                .filter(({wish}) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase()))
        }

        if (this.state.column !== null) {
            wishes =  _.sortBy(wishes, [this.state.column]);
            wishes = this.state.direction === 'ascending' ? wishes : wishes.reverse()
        }

        return (
            <React.Fragment>
                <Input className="search-input"
                       onChange={this.handleSearch}
                       placeholder="Wyszukaj życzenia po treści ..."
                       iconPosition="left"
                       icon="search"/>

                <Grid centered padded >
                      <SearchFilter
                             filterToggle={this.updateCategory}/>
                      <Button color='red' onClick={this.returnAllCategory}>WSZYSTKIE KATEGORIE</Button>
                </Grid>
                <Table celled class="ui inverted grey table" sortable fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={4} sorted={column === 'category' ? direction : null} onClick={this.handleSort('category')} sort><b>Kategoria</b></Table.HeaderCell>
                            <Table.HeaderCell width={8}><b>Życzenie</b></Table.HeaderCell>
                            <Table.HeaderCell width={4}><b>Dodaj do ulubionych</b></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {wishes.map(wish =>
                            this.generateRow (wishes, wish)
                        )}
                </Table.Body>
                </Table>
                <Button color='red' onClick={() =>
                    this.props.openCloseModalWish(true)
                    }>Dodaj życzenie</Button>
                <AddWish ref="addWish"/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        wishes: store.wishes,
        auth: store.auth
    }};
const mapDispatchToProps = dispatch => ({
    openCloseModalWish: (data) => dispatch(openCloseModalWish(data))
});
export default connect (mapStateToProps, mapDispatchToProps) (SearchView)