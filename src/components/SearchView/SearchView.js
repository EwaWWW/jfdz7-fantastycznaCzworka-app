import React, {Component} from 'react'
import SearchFilter from "./SearchFilter";
import WishesView from "./WishesView"
import wishes from "../../Data/wishes"

class SearchView extends Component {

    state = {
        allWishes: wishes
    };

    filterWishes(category) {
        const filteredWishes = this.getFilteredWishesForCategory(category);
        this.setState({
            filteredWishes
        });
        console.log(this.state)
    }

    getFilteredWishesForCategory(category) {
        return this.state.allWishes.filter(wish => wish.includes(category) )
    }

render() {
        return (
            <React.Fragment>
                <SearchFilter
                    onButtonToggle={this.filterWishes.bind(this)}/>
                {this.state.allWishes.map(wish =>
                    <WishesView
                        id={wish.id}
                        wish={wish.wish}
                        category={wish.category}/>
                )}
            </React.Fragment>
        )
    }
}

export default SearchView