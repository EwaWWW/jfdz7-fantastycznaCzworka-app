import React, { Component } from 'react'

import SearchFilter from "./SearchFilter"
import WishesView from "../../Views/WishesView/WishesView"
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
        this.state.allWishes;
        return (
            <React.Fragment>
                <SearchFilter
                    filterToggle={this.updateCategory}/>
                {wishes.map(wish =>
                    <WishesView
                        id={wish.id}
                        wish={wish.wish}
                        category={wish.category}/>

                )}
                <AddWish/>
            </React.Fragment>
        )
    }
}

export default SearchView