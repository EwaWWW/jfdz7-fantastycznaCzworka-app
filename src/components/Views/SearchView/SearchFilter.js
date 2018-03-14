import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import categories from '../../../Data/wishesCategories'

class SearchFilter extends Component {

    onButtonToggle = (e) => {
        const category = e.target.dataset.category;
        this.props.filterToggle(category);

        console.log(category)

    };
    render() {

        return (
            categories.map(categories => {
                    return (
                    <Button
                            color='red'
                            data-category={categories.category}
                            onClick={this.onButtonToggle}>
                            {categories.category}
                    </Button>
                )
        }))
    }
}

export default SearchFilter