import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

import wishes from '../../../Data/wishes';

class SearchFilter extends Component {
    state = {};

    handleToggleCategory = event => {

    };

    render() {

        return (
            wishes.map(wish => {
                return (
                    <Button onClick={this.handleToggleCategory}>
                        {wish.category}
                    </Button>
                )
            }))
    }
}

export default SearchFilter