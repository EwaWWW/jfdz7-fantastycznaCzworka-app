import React, {Component} from 'react'
import SearchFilter from "./SearchFilter";
import WishesView from "./WishesView"
import wishes from "../../Data/wishes"

class SearchView extends Component {

    state = {
        allWishes: wishes
    };

    filterWishes() {
    
    }


render() {
        return (
            <React.Fragment>
                <SearchFilter
                    onButtonToggle={this.filterWishes}/>

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