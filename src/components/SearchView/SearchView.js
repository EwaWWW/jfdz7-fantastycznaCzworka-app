import React, {Component} from 'react'
import SearchFilter from "./SearchFilter";
import WishesView from "./WishesView"
import wishes from "../../Data/wishes"
class SearchView extends Component {


    filterWishes() {

    }


render() {
        return (
            <React.Fragment>
                <SearchFilter onButtonToggle={this.filterWishes}/>
                <WishesView/>
            </React.Fragment>
        )
    }
}

export default SearchView