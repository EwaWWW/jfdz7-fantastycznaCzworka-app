import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Grid, Button} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

import SearchFilter from "./SearchFilter"
import TableRowWish from "../../Views/WishesView/TableRowWish"
import wishes from "../../../Data/wishes"
import AddWish from '../WishesView/AddWish'
import {openCloseModalWish} from "../../../state/modalAddWish";
import '../../../style/SearchView.css'


class SearchView extends Component {

    state = {
        column: null,
        data: wishes,
        direction: null,
        category: '',
        searchValue: ''
    };

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            });

            return
        }

        this.setState({
            data: data.reverse(),
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
        console.log("wi", wishes, wish, this.props.wishes)
        let test = wish.favorite!==undefined?wish.favorite:false

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

        const { column, data, direction } = this.state;


        let wishes = [];
        if (this.state.category === "ulubione") {
            wishes = this.props.wishes.wishes.filter(wish => wish.favorite === true)
                .filter(({wish}) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase()))
        }
        else if  (this.state.category) {
            wishes = this.props.wishes.wishes.filter(wish => wish.category === this.state.category)
                .filter(({wish}) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase()))
        }
        else {
            wishes = this.props.wishes.wishes.filter(({wish}) => wish.toLowerCase().includes(this.state.searchValue.trim().toLowerCase()))
        }

        return (
            <React.Fragment>
                <Input className="search-input"
                       onChange={this.handleSearch}
                       placeholder="Wyszukaj życzenia po treści ..."
                       iconPosition="left"
                       icon="search"/>

                <Grid centered padded>
                      <SearchFilter
                             filterToggle={this.updateCategory}/>
                      <Button color='red' onClick={this.returnAllCategory}>WSZYSTKIE KATEGORIE</Button>
                </Grid>
                <Table celled class="ui inverted grey table" sortable fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell sorted={column === 'category' ? direction : null} onClick={this.handleSort('category')}><b>Kategoria</b></Table.HeaderCell>
                            <Table.HeaderCell width={10}><b>Życzenie</b></Table.HeaderCell>
                            <Table.HeaderCell width={1}><b>Dodaj do ulubionych</b></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {wishes.map(wish =>
                            this.generateRow (wishes, wish)
                        )}
                        {/*{_.map((data), ({category, Życzenia, Ulubione}) =>(*/}
                            {/*<Table.Row key={Kategoria}>*/}
                                {/*<Table.HeaderCell>{Kategoria}</Table.HeaderCell>*/}
                                {/*<Table.HeaderCell>{Życzenia}</Table.HeaderCell>*/}
                                {/*<Table.HeaderCell>{Ulubione}</Table.HeaderCell>*/}
                            {/*</Table.Row>*/}
                        {/*))}*/}
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
        wishes: store.wishes
    }};
const mapDispatchToProps = dispatch => ({
    openCloseModalWish: (data) => dispatch(openCloseModalWish(data))
});
export default connect (mapStateToProps, mapDispatchToProps) (SearchView)
