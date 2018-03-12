import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import wishes from '../../../Data/wishes';

class SearchFilter extends Component {

    onButtonToggle = (e) => {
        const category = e.target.dataset.category;
        this.props.filterToggle(category);

        console.log(category)

    };

    render() {

        return (
            wishes.map(wish => {
                return (
                    <Button
                            data-category={wish.category}
                            onClick={this.onButtonToggle}>
                            {wish.category}
                    </Button>
                )
        }))
    }
}

export default SearchFilter