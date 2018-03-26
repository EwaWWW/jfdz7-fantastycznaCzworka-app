import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Grid, Button} from 'semantic-ui-react'

import SearchFilter from "./SearchFilter"
import TableRowWish from "../../Views/WishesView/TableRowWish"
import wishes from "../../../Data/wishes"
import AddWish from '../WishesView/AddWish'
import {openCloseModalWish} from "../../../state/modalAddWish";


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

    const wishes = this.state.category ? this.props.wishes.wishes.filter(wish => wish.category === this.state.category)
         :
        this.props.wishes.wishes;
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
                            <Table.HeaderCell width={10}><b>Życzenie</b></Table.HeaderCell>
                            <Table.HeaderCell width={1}><b>Dodaj do ulubionych</b></Table.HeaderCell>
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
    }}
const mapDispatchToProps = dispatch => ({
    openCloseModalWish: (data) => dispatch(openCloseModalWish(data))
})
export default connect (mapStateToProps, mapDispatchToProps) (SearchView)