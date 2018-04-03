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
    }

    render() {

        let wishes = [];
        let userWishes = this.props.wishes.wishes.filter(wish => wish.userId === undefined || wish.userId === this.props.auth.user.uid)

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
    }}
const mapDispatchToProps = dispatch => ({
    openCloseModalWish: (data) => dispatch(openCloseModalWish(data))
})
export default connect (mapStateToProps, mapDispatchToProps) (SearchView)
