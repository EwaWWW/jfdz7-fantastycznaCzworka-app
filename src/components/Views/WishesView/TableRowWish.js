import React, {Component} from 'react'
import { connect } from 'react-redux'

import '../../../style/WishesView.css'
import { Table, Icon } from 'semantic-ui-react'

import {addFavorite, removeFavorite} from "../../../state/wishes";

class TableRowWish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.favorite,
            id: this.props.id
        }
        console.log("TableRowWish", this.props.favorite, this.props.id)
    };

    addToFav = (data) => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        if (this.state.isChecked) {
            this.props.removeFavorite(data)
        }
        else {
            this.props.addFavorite(data)
        }
    };

    render() {
        const { category, wish, id } = this.props;
        return (
            <React.Fragment>
                   <Table.Row key={ id }>
                        <Table.Cell>{ category }</Table.Cell>
                        <Table.Cell>{ wish }</Table.Cell>
                        <Table.Cell onClick={() => this.addToFav({ id: id, wish: wish, category: category })}>
                            <Icon color={this.props.favorite ? "orange": "grey"} name='star' />
                        </Table.Cell>
                   </Table.Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    console.log("storeAddWIsh", store)
    return {
        favorites: store.wishes.favorites
    }}
const mapDispatchToProps = dispatch => ({
    addFavorite: (data) => dispatch(addFavorite(data)),
    removeFavorite: (data) => dispatch (removeFavorite(data))
})
export default connect (mapStateToProps, mapDispatchToProps) (TableRowWish)