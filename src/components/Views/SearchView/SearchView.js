import React, {Component} from 'react'
import SearchFilter from "./SearchFilter";
import WishesView from "../WishesView";
import AddWish from "../WishesView/AddWish";


class SearchView extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchFilter/>
                <WishesView/>
                <AddWish/>
            </React.Fragment>
        )
    }
}

export default SearchView