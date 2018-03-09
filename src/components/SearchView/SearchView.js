import React, {Component} from 'react'
import SearchFilter from "./SearchFilter";
import WishesView from "./WishesView"

class SearchView extends Component {



    filterWishes(e) {
        const category = e.currentTarget.value;
        const filteredWishes = this.getFilteredUsers(category);
        this.setState({
            filteredWishes
        });
    }

render() {
        return (
            <React.Fragment>
                <SearchFilter onClick={this.filterWishes}/>
                <WishesView/>
            </React.Fragment>
        )
    }
}

export default SearchView