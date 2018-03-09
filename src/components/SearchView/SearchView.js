import React, {Component} from 'react'
import SearchFilter from "./SearchFilter";
import WishesView from "./WishesView";

class SearchView extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchFilter/>
                <WishesView/>
            </React.Fragment>
        )
    }
}

export default SearchView